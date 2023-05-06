import React from "react";
import { Container, Text, Title } from "./style";

type Props = {
  value: number;
  message: string;
  heightMax?: number;
  color?: "PRIMARY" | "SECUNDARY" | "TERTIARY";
};

export function StatisticDescription({
  message,
  value,
  heightMax = 90,
  color = "PRIMARY",
}: Props) {
  return (
    <Container height={Number(heightMax)} color={color}>
      <Title>{value}</Title>
      <Text>{message}</Text>
    </Container>
  );
}
