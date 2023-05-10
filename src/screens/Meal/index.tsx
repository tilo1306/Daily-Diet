/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import { Alert } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Loading } from "@components/Loading";
import { ModalDelete } from "@components/ModaDelete";

import { deleteMeal } from "@storage/meal/deleteMeal";
import { getAllMeal } from "@storage/meal/getAllMeal";

import { IHours } from "src/type";

import {
  AreaContext,
  Container,
  Header,
  Title,
  TitleAreaContext,
  Text,
  SubTitleAreaContext,
  InfoDiet,
  CircleGreen,
  TextDiet,
  CircleRed,
  AreaButton,
  ButtonDelete,
} from "./styles";

type RouteParams = {
  idMeal: string;
  date: string;
};

export function Meal() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadMeal, setLoadMeal] = useState<(IHours | undefined)[]>([]);

  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const { navigate } = useNavigation();

  const route = useRoute();

  const { idMeal, date } = route.params as RouteParams;

  async function handleDelete() {
    await deleteMeal(idMeal, date);
    setModalDelete(false);
    navigate("home");
  }

  async function handleCancel() {
    setModalDelete(false);
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await getAllMeal();

      const findHour = data
        .map((meal) => meal.hours.find((mealHour) => mealHour.id === idMeal))
        .filter((meal) => meal !== undefined);

      setLoadMeal(findHour);

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
    <Container>
      <ModalDelete
        modalDelete={modalDelete}
        mealDelete={handleDelete}
        closedModal={handleCancel}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header>
            <ButtonIcon
              type="TERTIARY"
              icon="arrow-left"
              onPress={() => navigate("home")}
            />
            <Title>Refeição</Title>
          </Header>
          <AreaContext>
            <TitleAreaContext>{loadMeal[0]?.name}</TitleAreaContext>
            <Text>{loadMeal[0]?.description}</Text>
            <SubTitleAreaContext>Data e hora</SubTitleAreaContext>
            <Text>{`${date} às ${loadMeal[0]?.hour}`}</Text>
            {loadMeal[0]?.isFitness ? (
              <InfoDiet>
                <CircleGreen />
                <TextDiet>dentro da dieta</TextDiet>
              </InfoDiet>
            ) : (
              <InfoDiet>
                <CircleRed />
                <TextDiet>fora da dieta</TextDiet>
              </InfoDiet>
            )}
            <AreaButton>
              <Button
                icon="pencil"
                title="Editar refeição"
                onPress={() => navigate("editMeal", { date, idMeal })}
              />
              <ButtonDelete
                icon="trash-can-outline"
                title="Excluir refeição"
                type="SECONDARY"
                onPress={() => setModalDelete(true)}
              />
            </AreaButton>
          </AreaContext>
        </>
      )}
    </Container>
  );
}
