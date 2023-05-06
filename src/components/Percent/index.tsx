import React from "react";
import {
  AreaArrow,
  Container,
  Percentage,
  Text,
  AreaPercentage,
} from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
  positionArrow: "flex-start" | "flex-end";
  percentageValue: number;
};

export function Percent({ positionArrow, percentageValue }: Props) {
  return (
    <Container isFitness={percentageValue > 50 ? true : false}>
      <AreaArrow
        align={positionArrow === "flex-end" ? "flex-end" : "flex-start"}
      >
        <ButtonIcon
          icon={positionArrow === "flex-end" ? "arrow-up-right" : "arrow-left"}
        />
      </AreaArrow>
      <AreaPercentage>
        <Percentage>{percentageValue}%</Percentage>
        <Text>das refeições dentro da dieta</Text>
      </AreaPercentage>
    </Container>
  );
}
