import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "uuid-js";

import { getAllMeal } from "./getAllMeal";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { IResponse } from "src/type";

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

      dateAlreadyExist.hours.sort(function (a, b) {
        return a.hour < b.hour ? 1 : a.hour > b.hour ? -1 : 0;
      });

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

      newMealCollection.sort(function (a, b) {
        return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
      });

      newMealCollection.forEach((x) =>
        x.hours.sort(function (a, b) {
          return a.hour < b.hour ? 1 : a.hour > b.hour ? -1 : 0;
        })
      );

      const storage = JSON.stringify(newMealCollection);

      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    }
  } catch (error) {
    throw error;
  }
}
