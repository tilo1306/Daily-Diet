import React from "react";
import { AreaAddMeals, Container, Text } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";

export function Home() {
  const api = [
    {
      id: "dd4548d4-3faa-46b6-8eb4-1a835b5d41b7",
      name: "X-tudo",
      description: "Xis completo da lancheria do bairro",
      date_and_hour: "2022-08-12 16:00",
      isFitness: 0,
      created_at: "2023-04-08 22:43:18",
      userId: "2c2b2aad-c797-43e4-bba5-9308d2c784d4",
    },
    {
      id: "bc56f76d-90e3-4b8d-acc4-e7dcda9d2b5d",
      name: "Salada",
      description: "Saladinha com espinafre e beterraba",
      date_and_hour: "2022-08-12 17:00",
      isFitness: 1,
      created_at: "2023-04-09 23:45:53",
      userId: "2c2b2aad-c797-43e4-bba5-9308d2c784d4",
    },
    {
      id: "dce527e1-3e60-40f2-9824-2e1429a8e399",
      name: "Vitamina",
      description: "banana,leite,maça",
      date_and_hour: "2022-08-12 18:00",
      isFitness: 1,
      created_at: "2023-04-09 23:47:17",
      userId: "2c2b2aad-c797-43e4-bba5-9308d2c784d4",
    },
    {
      id: "97a3ba2f-adee-43a9-b413-09730a2bfa71",
      name: "Dogão",
      description: "Dogão cheio de lombriga",
      date_and_hour: "2022-08-12 18:00",
      isFitness: 0,
      created_at: "2023-04-09 23:47:58",
      userId: "2c2b2aad-c797-43e4-bba5-9308d2c784d4",
    },
  ];
  return (
    <Container>
      <Header />
      <Percent />
      <AreaAddMeals>
        <Text>Refeições</Text>
        <Button icon="plus" title="Nova Refeição" />
      </AreaAddMeals>
    </Container>
  );
}
