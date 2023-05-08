import React from "react";
import {
  AreaPercent,
  AreaStatistic,
  Container,
  SubAreaStatistic,
  Title,
} from "./styles";
import { Percent } from "@components/Percent";
import { StatisticDescription } from "@components/StatisticDescription";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  percent: number;
};

export function Statistic() {
  const route = useRoute();

  const { percent } = route.params as RouteParams;

  return (
    <Container isFitness={percent > 50 ? true : false}>
      <AreaPercent>
        <Percent positionArrow="flex-start" percentageValue={percent} />
      </AreaPercent>
      <AreaStatistic>
        <Title>Estatísticas gerais</Title>
        <StatisticDescription
          value={125}
          message={"melhor sequência de pratos dentro da dieta"}
        />
        <StatisticDescription value={109} message={"refeições registradas"} />
        <SubAreaStatistic>
          <StatisticDescription
            value={99}
            message={"refeições dentro da dieta"}
            heightMax={107}
            color="SECUNDARY"
          />
          <StatisticDescription
            value={10}
            message={"refeições fora da dieta"}
            heightMax={107}
            color="TERTIARY"
          />
        </SubAreaStatistic>
      </AreaStatistic>
    </Container>
  );
}
