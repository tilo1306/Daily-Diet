import { Button } from "@components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  width: 100%;
  margin-left: 112px;
`;

export const AreaContext = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
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
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const InfoDiet = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  width: 144px;
  height: 34px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 34px;
  margin-top: 24px;
`;
export const TextDiet = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const CircleGreen = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;

export const CircleRed = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const AreaButton = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ButtonDelete = styled(Button)`
  margin-top: 9px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
`;
