import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@components/Button";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
`;

export const TextBold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Img = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 40px;
`;

export const ButtonBack = styled(Button)`
  width: 191px;
  margin-top: 32px;
`;
