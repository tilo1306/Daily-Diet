import styled from "styled-components/native";

interface HeightProps {
  height: number;
  color: "PRIMARY" | "SECUNDARY" | "TERTIARY";
}

export const Container = styled.View<HeightProps>`
  flex: 1;
  max-height: ${(props) => props.height}px;

  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme, color }) =>
    color === "PRIMARY"
      ? theme.COLORS.GRAY_600
      : color === "SECUNDARY"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
`;
