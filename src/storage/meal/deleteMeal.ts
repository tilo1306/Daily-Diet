import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { getAllMeal } from "./getAllMeal";

export async function deleteMeal(idMeal: string, date: string) {
  try {
    const storeMeal = await getAllMeal();

    const mealTimeToRemove = storeMeal.map((dates) => {
      if (dates.date === date) {
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

    const storage = JSON.stringify(deleteEmptyHour);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
