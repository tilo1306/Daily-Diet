import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY" | "TERTIARY";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)``;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color:
    type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : type === "SECONDARY"
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_200,
}))``;
