import { Button } from "@components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 24px;
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin-left: 112px;
  width: 100%;
`;

export const AreaContext = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  flex: 1;
  padding: 40px 24px;
`;

export const TitleAreaContext = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const SubTitleAreaContext = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const InfoDiet = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 34px;
  flex-direction: row;
  height: 34px;
  justify-content: center;
  margin-top: 24px;
  width: 144px;
`;
export const TextDiet = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const CircleGreen = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  border-radius: 4px;
  height: 8px;
  margin-right: 8px;
  width: 8px;
`;

export const CircleRed = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
  border-radius: 4px;
  height: 8px;
  margin-right: 8px;
  width: 8px;
`;

export const AreaButton = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ButtonDelete = styled(Button)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  margin-top: 9px;
`;
