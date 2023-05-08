import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { IResponse } from "src/type";

export async function getAllMeal() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: IResponse[] = storage
      ? JSON.parse(storage)
      : [
          {
            id: 1,
            date: "2022-08-12",
            hours: [
              {
                hour: "09:30",
                description: "Vitamina de banana com leite",
                isFitness: true,
              },
              {
                hour: "12:30",
                description: "Salada cesar com frango e suco",
                isFitness: true,
              },
              {
                hour: "16:00",
                description: "Whey protein com leite",
                isFitness: true,
              },
              {
                hour: "20:00",
                description: "X-tudo",
                isFitness: false,
              },
            ],
          },
          {
            id: 2,
            date: "2022-08-11",
            hours: [
              {
                hour: "09:30",
                description: "Vitamina de banana com leite",
                isFitness: true,
              },
              {
                hour: "12:30",
                description: "Salada cesar com frango e suco",
                isFitness: true,
              },
              {
                hour: "16:00",
                description: "Whey protein com leite",
                isFitness: true,
              },
              {
                hour: "20:00",
                description: "X-tudo",
                isFitness: false,
              },
            ],
          },
        ];

    return meals;
  } catch (error) {
    throw error;
  }
}
