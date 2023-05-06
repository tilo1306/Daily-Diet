import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
type Iconprops = {
  diet: boolean;
};

export const Container = styled.View`
  width: 100%;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const VerticalLine = styled.View`
  width: 1px;
  height: ${({ theme }) => theme.FONT_SIZE.SM}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 12px;
`;

export const AreaDescription = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ContainerIcon = styled.View``;

export const Icon = styled(FontAwesome).attrs<Iconprops>(({ theme, diet }) => ({
  size: 15,
  color: diet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
}))``;
