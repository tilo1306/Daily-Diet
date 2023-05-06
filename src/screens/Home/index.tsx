import React from "react";
import { AreaAddMeals, Container, Text } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { ListMeat } from "@components/ListMeat";

export function Home() {
  return (
    <Container>
      <Header />
      <Percent positionArrow="flex-end" percentageValue={90} />
      <AreaAddMeals>
        <Text>Refeições</Text>
        <Button icon="plus" title="Nova Refeição" />
      </AreaAddMeals>
      <ListMeat />
    </Container>
  );
}
