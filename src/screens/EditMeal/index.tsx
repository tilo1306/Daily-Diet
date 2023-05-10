/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import { Alert, Platform } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { getAllMeal } from "@storage/meal/getAllMeal";
import { updateMeal } from "@storage/meal/updateMeal";

import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Loading } from "@components/Loading";

import {
  AreaButton,
  AreaForm,
  AreaFormDate,
  AreaFormDiet,
  ButtonSelectNot,
  ButtonSelectYes,
  CircleGreen,
  CircleRed,
  Container,
  Header,
  InputText,
  Text,
  Title,
  ViewDate,
} from "./styles";

type RouteParams = {
  idMeal: string;
  date: string;
};

export function EditMeal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [newdate, setNewDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFitnessYes, SetIsFitnessYes] = useState<boolean>(false);
  const [isFitnessNot, SetIsFitnessNot] = useState<boolean>(false);
  const [showPickerDate, setShowPickerDate] = useState(false);
  const [showPickerTime, setShowPickerTime] = useState(false);

  const { navigate } = useNavigation();

  const route = useRoute();

  const { idMeal, date } = route.params as RouteParams;

  function handleChangeDate(selectedDate: Date | undefined) {
    const currentDate = selectedDate ? new Date(selectedDate) : new Date();
    setShowPickerDate(Platform.OS === "ios");
    setNewDate(currentDate.toLocaleDateString("pt-br"));
  }

  function handleChangeTime(selectedTime: Date | undefined) {
    const currentTime = selectedTime ? new Date(selectedTime) : new Date();
    setShowPickerTime(Platform.OS === "ios");
    setTime(
      currentTime.toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric",
        second: undefined,
      })
    );
  }

  function handleSelectYes() {
    SetIsFitnessYes(true);
    SetIsFitnessNot(false);
  }

  function handleSelectNot() {
    SetIsFitnessYes(false);
    SetIsFitnessNot(true);
  }

  async function handleSubmit() {
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      newdate.trim().length === 0 ||
      time.trim().length === 0 ||
      (isFitnessNot === false && isFitnessYes === false)
    ) {
      Alert.alert("Campo vazio", "Existe campos vazios ou não selecionado");
    } else {
      await updateMeal({
        oldDate: date,
        idMeal,
        name,
        description,
        date: newdate,
        hour: time,
        isFitness: isFitnessYes,
      });
      SetIsFitnessYes(false);
      SetIsFitnessNot(false);
      setName("");
      setDescription("");
      setNewDate("");
      setTime("");

      isFitnessYes ? navigate("feedbackpositive") : navigate("feedbackbad");
    }
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await getAllMeal();

      const findHour = data
        .map((meal) => meal.hours.find((mealHour) => mealHour.id === idMeal))
        .filter((meal) => meal !== undefined);

      SetIsFitnessYes(findHour[0]?.isFitness as boolean);
      SetIsFitnessNot(!findHour[0]?.isFitness);
      setName(findHour[0]?.name as string);
      setDescription(findHour[0]?.description as string);
      setNewDate(date);
      setTime(findHour[0]?.hour as string);

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
            <Title>Nova refeição</Title>
          </Header>
          <AreaForm>
            <Text>Nome</Text>
            <InputText maxLength={36} value={name} onChangeText={setName} />
            <Text>Descrição</Text>
            <Input
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              maxHeightInput={120}
              value={description}
              onChangeText={setDescription}
            />

            <AreaFormDate>
              <ViewDate>
                <Text>Data</Text>
                <Input
                  value={newdate}
                  onPressIn={() => setShowPickerDate(!showPickerDate)}
                />
                {showPickerDate && (
                  <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    onChange={(event: any, selectedDate: Date | undefined) =>
                      handleChangeDate(selectedDate)
                    }
                  />
                )}
              </ViewDate>
              <ViewDate>
                <Text>Hora</Text>
                <Input
                  value={time}
                  onPressIn={() => setShowPickerTime(!showPickerTime)}
                />
                {showPickerTime && (
                  <DateTimePicker
                    value={new Date()}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={(event: any, selectedTime: Date | undefined) =>
                      handleChangeTime(selectedTime)
                    }
                  />
                )}
              </ViewDate>
            </AreaFormDate>

            <Text>Está dentro da dieta?</Text>
            <AreaFormDiet>
              <ButtonSelectYes onPress={handleSelectYes} clicker={isFitnessYes}>
                <CircleGreen />
                <Text>Sim</Text>
              </ButtonSelectYes>
              <ButtonSelectNot onPress={handleSelectNot} clicker={isFitnessNot}>
                <CircleRed />
                <Text>Não</Text>
              </ButtonSelectNot>
            </AreaFormDiet>

            <AreaButton>
              <Button title="Salvar alterações" onPress={handleSubmit} />
            </AreaButton>
          </AreaForm>
        </>
      )}
    </Container>
  );
}
