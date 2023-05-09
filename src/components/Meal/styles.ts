import styled, { css } from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
type Iconprops = {
  diet: boolean;
};

export const Container = styled(TouchableOpacity)`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  height: 49px;
  margin-bottom: 8px;
  padding: 0 12px;
  width: 100%;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const VerticalLine = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_400};
    height: ${theme.FONT_SIZE.SM}px;
  `}
  margin: 0 12px;
  width: 1px;
`;

export const AreaDescription = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const ContainerIcon = styled.View``;

export const Icon = styled(FontAwesome).attrs<Iconprops>(({ theme, diet }) => ({
  color: diet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  size: 15,
}))``;
