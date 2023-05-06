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

type Props = {
  hours: {
    hour: string;
    description: string;
    isFitness: boolean;
  }[];
};

export function Meat({ hours }: Props) {
  return (
    <>
      {hours.map((p) => (
        <Container key={p.hour}>
          <Hour key={p.description}>{p.hour}</Hour>
          <VerticalLine />
          <AreaDescription>
            <Description>{p.description}</Description>
            <ContainerIcon>
              <Icon name="circle" diet={p.isFitness} />
            </ContainerIcon>
          </AreaDescription>
        </Container>
      ))}
    </>
  );
}
