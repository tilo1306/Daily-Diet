import React, { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";

import { Loading } from "@components/Loading";
import { Percent } from "@components/Percent";
import { StatisticDescription } from "@components/StatisticDescription";

import { getAllMeal } from "@storage/meal/getAllMeal";

import { IResponse } from "src/type";

import {
  AreaPercent,
  AreaStatistic,
  Container,
  SubAreaStatistic,
  Title,
} from "./styles";

type RouteParams = {
  percent: number;
};

export function Statistic() {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState<IResponse[]>([]);
  const route = useRoute();

  const { percent } = route.params as RouteParams;

  let bestSequencie = 0;
  let currentCount = 0;

  for (const date of meals) {
    for (const hour of date.hours) {
      if (hour.isFitness) {
        currentCount++;
        if (currentCount > bestSequencie) {
          bestSequencie = currentCount;
        }
      } else {
        currentCount = 0;
      }
    }
  }

  const fitnessValues = meals.flatMap((meal) =>
    meal.hours.map((hour) => hour.isFitness)
  );

  const mealFitnessTrue = fitnessValues.filter((meal) => meal === true);
  const mealFitnessfalse = fitnessValues.filter((meal) => meal === false);

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await getAllMeal();
      setMeals(data);

      setIsLoading(false);
    } catch (error) {
      Alert.alert("Refeições", "Não foi possível carregar as refeição");
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container isFitness={percent > 50 ? true : false}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AreaPercent>
            <Percent positionArrow="flex-start" percentageValue={percent} />
          </AreaPercent>
          <AreaStatistic>
            <Title>Estatísticas gerais</Title>
            <StatisticDescription
              value={bestSequencie}
              message={"melhor sequência de pratos dentro da dieta"}
            />
            <StatisticDescription
              value={fitnessValues.length}
              message={"refeições registradas"}
            />
            <SubAreaStatistic>
              <StatisticDescription
                value={mealFitnessTrue.length}
                message={"refeições dentro da dieta"}
                heightMax={107}
                color="SECUNDARY"
              />
              <StatisticDescription
                value={mealFitnessfalse.length}
                message={"refeições fora da dieta"}
                heightMax={107}
                color="TERTIARY"
              />
            </SubAreaStatistic>
          </AreaStatistic>
        </>
      )}
    </Container>
  );
}
