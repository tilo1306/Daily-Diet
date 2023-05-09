import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@components/Button";

export const Container = styled(SafeAreaView)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GREEN_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Img = styled.Image`
  height: 288px;
  margin-top: 40px;
  width: 224px;
`;

export const ButtonBack = styled(Button)`
  margin-top: 32px;
  width: 191px;
`;
