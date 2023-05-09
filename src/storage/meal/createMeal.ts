import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeal } from "./getAllMeal";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { IResponse } from "src/type";
import uuid from "uuid-js";

type Props = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isFitness: boolean;
};

export async function createMeal({
  name,
  description,
  date,
  hour,
  isFitness,
}: Props) {
  try {
    const storeMeal = await getAllMeal();

    const dateAlreadyExist = storeMeal.find((meal) => meal.date === date);
    if (dateAlreadyExist) {
      dateAlreadyExist.hours.push({
        id: uuid.create().toString(),
        name,
        hour,
        description,
        isFitness,
      });

      console.log(dateAlreadyExist);

      const storage = JSON.stringify(storeMeal);
      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } else {
      const newMeal: IResponse = {
        id: uuid.create().toString(),
        date,
        hours: [
          { id: uuid.create().toString(), name, hour, description, isFitness },
        ],
      };
      const newMealCollection = [...storeMeal, newMeal];
      const storage = JSON.stringify(newMealCollection);
      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    }
  } catch (error) {
    throw error;
  }
}
