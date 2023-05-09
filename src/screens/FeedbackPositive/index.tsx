import React from "react";
import { useNavigation } from "@react-navigation/native";
import Happy from "@assets/Illustration.png";

import { ButtonBack, Container, Img, Text, TextBold, Title } from "./styles";

export function FeedbackPositive() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Title>Continue assim</Title>
      <Text>
        Você continua
        <TextBold> dentro da dieta. </TextBold>
        Muito bem!
      </Text>
      <Img source={Happy} />

      <ButtonBack
        title="Ir para a página inicial"
        onPress={() => navigate("home")}
      />
    </Container>
  );
}
