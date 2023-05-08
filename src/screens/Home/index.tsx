/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import { AreaAddMeals, Container, Text } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { ListMeal } from "@components/ListMeal";
import { IHours, IResponse } from "src/type";
import { getAllMeal } from "@storage/meal/getAllMeal";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Loading } from "@components/Loading";
import { Alert } from "react-native";

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState<IResponse[]>([]);
  const [percent, setPercent] = useState<number>(0);

  const { navigate } = useNavigation();

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await getAllMeal();
      setMeals(data);

      setIsLoading(false);
      calculatePercents(data);
    } catch (error) {
      Alert.alert("Refeições", "Não foi possível carregar as refeição");
      console.log(error);
    }
  }

  async function calculatePercents(listMeals: IResponse[]) {
    const listHours: IHours[] = [];
    listMeals.forEach((meal) => meal.hours.map((hour) => listHours.push(hour)));

    const isFitnessAmountTrue = listHours.filter(
      (meal) => meal.isFitness === true
    );

    const valuePercent = (
      (isFitnessAmountTrue.length / listHours.length) *
      100
    ).toFixed(2);

    setPercent(parseFloat(valuePercent));
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Percent positionArrow="flex-end" percentageValue={percent} />
      <AreaAddMeals>
        <Text>Refeições</Text>
        <Button
          icon="plus"
          title="Nova Refeição"
          onPress={() => navigate("newMeat")}
        />
      </AreaAddMeals>
      {isLoading ? <Loading /> : <ListMeal data={meals} />}
    </Container>
  );
}
