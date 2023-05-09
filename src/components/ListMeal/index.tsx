/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Date } from "./styles";
import { Meal } from "@components/Meal";
import { FlatList } from "react-native";
import { IResponse } from "src/type";
import { ListEmpty } from "@components/ListEmpty";

interface Props {
  data: IResponse[];
}

export function ListMeal({ data }: Props) {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={[{ paddingBottom: 50 }]}
      renderItem={({ item }) => (
        <>
          <Date>{item.date}</Date>
          <Meal hours={item.hours} />
        </>
      )}
      ListEmptyComponent={() => (
        <ListEmpty message="Não há Refeição cadastrada" />
      )}
    />
  );
}
