import React from "react";
import { ButtonBack, Container, Img, Text, TextBold, Title } from "./styles";
import Happy from "@assets/Illustration.png";
export function FeedbackPositive() {
  return (
    <Container>
      <Title>Continue assim</Title>
      <Text>
        Você continua
        <TextBold> dentro da dieta. </TextBold>
        Muito bem!
      </Text>
      <Img source={Happy} />

      <ButtonBack title="Ir para a página inicial" />
    </Container>
  );
}
