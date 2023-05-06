import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface ColorProps {
  isFitness: boolean;
}

export const Container = styled(SafeAreaView)<ColorProps>`
  background-color: ${({ theme, isFitness }) =>
    isFitness ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex: 1;
`;

export const AreaPercent = styled.View`
  padding: 0 16px;
`;

export const AreaStatistic = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  margin-top: 26px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
  margin-top: 33px;
  margin-bottom: 23px;
`;

export const SubAreaStatistic = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`;
