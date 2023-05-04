import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 102px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  padding: 8px;
`;

export const AreaArrow = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const AreaPercentage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: -12px;
`;

export const Percentage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.G}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
