import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
  border-radius: 6px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  min-height: 50px;
  max-height: 50px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled(MaterialCommunityIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 18,
    color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  })
)`
  margin-right: 12px;
`;
