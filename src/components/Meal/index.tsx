import React from "react";
import {
  AreaDescription,
  Container,
  ContainerIcon,
  Description,
  Hour,
  Icon,
  VerticalLine,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  hours: {
    id: string;
    name: string;
    hour: string;
    description: string;
    isFitness: boolean;
  }[];
  date: string;
};

export function Meal({ hours, date }: Props) {
  const { navigate } = useNavigation();

  function handleOpenMeal(id: string) {
    navigate("meal", { idMeal: id, date });
  }

  return (
    <>
      {hours.map((p) => (
        <Container key={p.id} onPress={() => handleOpenMeal(p.id)}>
          <Hour key={p.description}>{p.hour}</Hour>
          <VerticalLine />
          <AreaDescription>
            <Description>{p.name}</Description>
            <ContainerIcon>
              <Icon name="circle" diet={p.isFitness} />
            </ContainerIcon>
          </AreaDescription>
        </Container>
      ))}
    </>
  );
}
