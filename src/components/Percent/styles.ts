import styled, { css } from "styled-components/native";

interface PositionArrowProps {
  align: "flex-start" | "flex-end";
}

interface ColorProps {
  isFitness: boolean;
}

export const Container = styled.View<ColorProps>`
  background-color: ${({ theme, isFitness }) =>
    isFitness ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  height: 102px;
  padding: 8px;
  width: 100%;
`;

export const AreaArrow = styled.View<PositionArrowProps>`
  align-items: ${(props) => props.align};
  width: 100%;
`;

export const AreaPercentage = styled.View`
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  margin-top: -12px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.G}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
