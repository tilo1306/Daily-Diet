import React from "react";
import {
  AreaArrow,
  Container,
  Percentage,
  Text,
  AreaPercentage,
} from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

type Props = {
  positionArrow: "flex-start" | "flex-end";
  percentageValue: number;
};

export function Percent({ positionArrow, percentageValue }: Props) {
  const { navigate } = useNavigation();

  function handleSubmit() {
    if (positionArrow === "flex-end") {
      navigate("statistic", { percent: percentageValue });
    } else {
      navigate("home");
    }
  }

  return (
    <Container isFitness={percentageValue > 50 ? true : false}>
      <AreaArrow
        align={positionArrow === "flex-end" ? "flex-end" : "flex-start"}
      >
        <ButtonIcon
          icon={positionArrow === "flex-end" ? "arrow-up-right" : "arrow-left"}
          onPress={handleSubmit}
        />
      </AreaArrow>
      <AreaPercentage>
        <Percentage>{percentageValue}%</Percentage>
        <Text>das refeições dentro da dieta</Text>
      </AreaPercentage>
    </Container>
  );
}
