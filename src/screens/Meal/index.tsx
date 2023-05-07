import React, { useState } from "react";
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
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";

export function Meal() {
  const [isFitness, setIsFitness] = useState(false);
  return (
    <Container>
      <Header>
        <ButtonIcon type="TERTIARY" icon="arrow-left" />
        <Title>Refeição</Title>
      </Header>
      <AreaContext>
        <TitleAreaContext>Sanduíche</TitleAreaContext>
        <Text>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Text>
        <SubTitleAreaContext>Data e hora</SubTitleAreaContext>
        <Text>12/08/2022 às 16:00</Text>
        {isFitness ? (
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
          <Button icon="pencil" title="Editar refeição" />
          <ButtonDelete
            icon="trash-can-outline"
            title="Excluir refeição"
            type="SECONDARY"
          />
        </AreaButton>
      </AreaContext>
    </Container>
  );
}
