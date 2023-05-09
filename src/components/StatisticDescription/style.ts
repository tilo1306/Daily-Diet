import styled, { css } from "styled-components/native";

interface HeightProps {
  height: number;
  color: "PRIMARY" | "SECUNDARY" | "TERTIARY";
}

export const Container = styled.View<HeightProps>`
  background-color: ${({ theme, color }) =>
    color === "PRIMARY"
      ? theme.COLORS.GRAY_600
      : color === "SECUNDARY"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  flex: 1;
  margin-bottom: 12px;
  max-height: ${(props) => props.height}px;
  padding: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
  margin-bottom: 8px;
  text-align: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  text-align: center;
`;
