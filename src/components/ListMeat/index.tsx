/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Date } from "./styles";
import { Meat } from "@components/Meat";
import { FlatList } from "react-native";
import { IResponse } from "src/type";
import { ListEmpty } from "@components/ListEmpty";

export function ListMeat() {
  const api: IResponse[] = [
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
          isFitness: true,
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
          isFitness: true,
        },
      ],
    },
  ];
  return (
    <FlatList
      data={api}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <>
          <Date>{item.date}</Date>
          <Meat hours={item.hours} />
        </>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{ paddingBottom: 50 }]}
      ListEmptyComponent={() => (
        <ListEmpty message="Não há pessoas nesse time" />
      )}
    />
  );
}
