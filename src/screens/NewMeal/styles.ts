import { Input } from "@components/Input";
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
  margin-left: 90px;
`;

export const AreaForm = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  padding: 40px 24px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-bottom: 4px;
`;

export const InputText = styled(Input)`
  margin-bottom: 24px;
`;

export const AreaFormDate = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  gap: 20px;
  margin: 24px 0;
`;
export const ViewDate = styled.View`
  flex: 1;
`;

export const AreaFormDiet = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export const ViewSelected = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 6px;
  margin-top: 8px;
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
