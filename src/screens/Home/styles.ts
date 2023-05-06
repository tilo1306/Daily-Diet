import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
  margin-top: 40px;
  padding: 0 24px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 8px;
`;

export const AreaAddMeals = styled.View`
  width: 100%;
  height: 79px;
  background-color: aliceblue;
  margin-top: 40px;
  margin-bottom: 32px;
`;
