import React from "react";
import {
  AreaArrow,
  Container,
  Percentage,
  Text,
  AreaPercentage,
} from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

export function Percent() {
  return (
    <Container>
      <AreaArrow>
        <ButtonIcon icon="arrow-up-right" />
      </AreaArrow>
      <AreaPercentage>
        <Percentage>90,86%</Percentage>
        <Text>das refeições dentro da dieta</Text>
      </AreaPercentage>
    </Container>
  );
}
