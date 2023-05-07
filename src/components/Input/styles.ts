import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface MaxHeightProps {
  maxHeightInput: number;
}

export const Container = styled(TextInput)<MaxHeightProps>`
  flex: 1;

  ${({ theme, maxHeightInput }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid ${theme.COLORS.GRAY_500};
    min-height: ${maxHeightInput}px;
    max-height: ${maxHeightInput}px;
  `};
  border-radius: 6px;
  padding: 14px;
`;
