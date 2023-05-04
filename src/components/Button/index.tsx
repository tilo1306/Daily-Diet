import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Title, ButtonTypeStyleProps, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon ? (
        <>
          <Icon name={icon} type={type} />
          <Title>{title}</Title>
        </>
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
