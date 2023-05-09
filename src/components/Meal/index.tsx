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
    id: string;
    name: string;
    hour: string;
    description: string;
    isFitness: boolean;
  }[];
};

export function Meal({ hours }: Props) {
  return (
    <>
      {hours.map((p) => (
        <Container key={p.id}>
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
