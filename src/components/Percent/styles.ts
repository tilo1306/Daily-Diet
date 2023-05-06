import styled from "styled-components/native";

interface PositionArrowProps {
  align: "flex-start" | "flex-end";
}

interface ColorProps {
  isFitness: boolean;
}

export const Container = styled.View<ColorProps>`
  width: 100%;
  height: 102px;
  background-color: ${({ theme, isFitness }) =>
    isFitness ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  padding: 8px;
`;

export const AreaArrow = styled.View<PositionArrowProps>`
  width: 100%;
  align-items: ${(props) => props.align};
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
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
