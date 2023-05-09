import { Input } from "@components/Input";
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
  margin-left: 90px;
  width: 100%;
`;

export const AreaForm = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  flex: 1;
  padding: 40px 24px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  margin-bottom: 4px;
`;

export const InputText = styled(Input)`
  margin-bottom: 24px;
`;

export const AreaFormDate = styled.View`
  flex-direction: row;
  gap: 20px;
  height: 70px;
  margin: 24px 0;
  width: 100%;
`;
export const ViewDate = styled.View`
  flex: 1;
`;

export const AreaFormDiet = styled.View`
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;

export const ButtonSelectYes = styled.TouchableOpacity<{ clicker: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  border-radius: 6px;
  border-width: ${({ clicker }) => (clicker ? "1px" : "0")};
  flex: 1;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  margin-top: 8px;
`;

export const ButtonSelectNot = styled.TouchableOpacity<{ clicker: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-color: ${({ theme }) => theme.COLORS.RED_DARK};
  border-radius: 6px;
  border-width: ${({ clicker }) => (clicker ? "1px" : "0")};
  flex: 1;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  margin-top: 8px;
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
