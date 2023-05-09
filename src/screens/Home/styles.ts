import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
  padding: 0 24px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-bottom: 8px;
`;

export const AreaAddMeals = styled.View`
  background-color: aliceblue;
  height: 79px;
  margin-bottom: 32px;
  margin-top: 40px;
  width: 100%;
`;
