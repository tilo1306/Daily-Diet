import React, { useState } from "react";
import { Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

import { createMeal } from "@storage/meal/createMeal";

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

export function NewMeat() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isFitnessYes, SetIsFitnessYes] = useState<boolean>(false);
  const [isFitnessNot, SetIsFitnessNot] = useState<boolean>(false);
  const [showPickerDate, setShowPickerDate] = useState(false);
  const [showPickerTime, setShowPickerTime] = useState(false);

  const { navigate } = useNavigation();

  function handleChangeDate(selectedDate: Date | undefined) {
    const currentDate = selectedDate ? new Date(selectedDate) : new Date();
    setShowPickerDate(Platform.OS === "ios");
    setDate(currentDate.toLocaleDateString("pt-br"));
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
      date.trim().length === 0 ||
      time.trim().length === 0 ||
      (isFitnessNot === false && isFitnessYes === false)
    ) {
      Alert.alert("Campo vazio", "Existe campos vazios ou não selecionado");
    } else {
      await createMeal({
        name,
        description,
        date,
        hour: time,
        isFitness: isFitnessYes,
      });
      SetIsFitnessYes(false);
      SetIsFitnessNot(false);
      setName("");
      setDescription("");
      setDate("");
      setTime("");

      isFitnessYes ? navigate("feedbackpositive") : navigate("feedbackbad");
    }
  }

  return (
    <Container>
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
              value={date}
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
                is24Hour={true}
                mode="time"
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
          <Button title="Cadastrar refeição" onPress={handleSubmit} />
        </AreaButton>
      </AreaForm>
    </Container>
  );
}
