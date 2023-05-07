import React from "react";
import { ButtonBack, Container, Img, Text, TextBold, Title } from "./styles";
import Sorry from "@assets/IllustrationSorry.png";
export function FeedbackBad() {
  return (
    <Container>
      <Title>Que pena!</Title>
      <Text>
        Você
        <TextBold> saiu da dieta </TextBold>
        dessa vez, mas continue se esforçando e não desista!
      </Text>
      <Img source={Sorry} />
      <ButtonBack title="Ir para a página inicial" />
    </Container>
  );
}
