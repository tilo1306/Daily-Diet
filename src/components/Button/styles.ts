import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.RED_DARK};
  border-radius: 6px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled(MaterialCommunityIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 18,
    color:
      type === "PRIMARY"
        ? theme.COLORS.WHITE
        : type === "SECONDARY"
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_200,
  })
)`
  margin-right: 12px;
`;
