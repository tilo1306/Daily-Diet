import { Button } from "@components/Button";
import styled, { css } from "styled-components/native";

export const ModalDeleteArea = styled.Modal``;

export const Container = styled.View`
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  flex: 1;
  justify-content: center;
  padding: 0 24px;
`;

export const AreaModal = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding: 24px;
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
  `}

  text-align: center;
  margin-top: 16px;
  width: 276px;
`;

export const AreaButton = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-top: 32px;
  width: 100%;
`;

export const ButtonCancel = styled(Button)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;
