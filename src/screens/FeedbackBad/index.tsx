import React from "react";
import { useNavigation } from "@react-navigation/native";

import Sorry from "@assets/IllustrationSorry.png";

import { ButtonBack, Container, Img, Text, TextBold, Title } from "./styles";

export function FeedbackBad() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Que pena!</Title>
      <Text>
        Você
        <TextBold> saiu da dieta </TextBold>
        dessa vez, mas continue se esforçando e não desista!
      </Text>
      <Img source={Sorry} />
      <ButtonBack
        title="Ir para a página inicial"
        onPress={() => navigate("home")}
      />
    </Container>
  );
}
