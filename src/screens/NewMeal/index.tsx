import React from "react";
import {
  AreaButton,
  AreaForm,
  AreaFormDate,
  AreaFormDiet,
  CircleGreen,
  CircleRed,
  Container,
  Header,
  InputText,
  Text,
  Title,
  ViewDate,
  ViewSelected,
} from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function NewMeat() {
  const { navigate } = useNavigation();

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
        <InputText maxLength={36} />
        <Text>Descrição</Text>
        <Input
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          maxHeightInput={120}
        />

        <AreaFormDate>
          <ViewDate>
            <Text>Data</Text>
            <Input maxLength={36} />
          </ViewDate>
          <ViewDate>
            <Text>Hora</Text>
            <Input maxLength={36} />
          </ViewDate>
        </AreaFormDate>

        <Text>Está dentro da dieta?</Text>
        <AreaFormDiet>
          <ViewSelected>
            <CircleGreen />
            <Text>Sim</Text>
          </ViewSelected>
          <ViewSelected>
            <CircleRed />
            <Text>Não</Text>
          </ViewSelected>
        </AreaFormDiet>

        <AreaButton>
          <Button title="Cadastrar refeição" />
        </AreaButton>
      </AreaForm>
    </Container>
  );
}
