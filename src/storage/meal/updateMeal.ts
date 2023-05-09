import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeal } from "./getAllMeal";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { IHours, IResponse } from "src/type";
import uuid from "uuid-js";

type Props = {
  oldDate: string;
  idMeal: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isFitness: boolean;
};

export async function updateMeal({
  oldDate,
  idMeal,
  name,
  description,
  date,
  hour,
  isFitness,
}: Props) {
  try {
    const storeMeal = await getAllMeal();

    if (oldDate === date) {
      const searchMeal = storeMeal
        .find((x) => x.date === date)
        ?.hours.find((a) => a.id === idMeal) as IHours;

      searchMeal.name = name;
      searchMeal.description = description;
      searchMeal.hour = hour;
      searchMeal.isFitness = isFitness;

      const storage = JSON.stringify(storeMeal);
      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } else {
      const mealTimeToRemove = storeMeal.map((dates) => {
        if (dates.date === oldDate) {
          return {
            ...dates,

            hours: dates.hours.filter((time) => time.id !== idMeal),
          };
        }
        return dates;
      });

      const deleteEmptyHour = mealTimeToRemove.filter(
        (dates) => dates.hours.length > 0
      );

      const findDate = deleteEmptyHour.find((dates) => dates.date === date);

      if (findDate) {
        findDate.hours.push({
          id: uuid.create().toString(),
          name,
          hour,
          description,
          isFitness,
        });

        findDate.hours.sort(function (a, b) {
          return a.hour < b.hour ? -1 : a.hour > b.hour ? 1 : 0;
        });

        const storage = JSON.stringify(deleteEmptyHour);
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
      } else {
        const newMeal: IResponse = {
          id: uuid.create().toString(),
          date,
          hours: [
            {
              id: uuid.create().toString(),
              name,
              hour,
              description,
              isFitness,
            },
          ],
        };
        const newMealCollection = [...deleteEmptyHour, newMeal];

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
    }
  } catch (error) {
    throw error;
  }
}
