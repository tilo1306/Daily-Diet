import React from "react";
import {
  AreaButton,
  AreaModal,
  ButtonCancel,
  Container,
  ModalDeleteArea,
  Title,
} from "./styles";
import { Button } from "@components/Button";
import { Alert } from "react-native";

type Props = {
  modalDelete: boolean;
  mealDelete: () => void;
  closedModal: () => void;
};

export function ModalDelete({ modalDelete, mealDelete, closedModal }: Props) {
  function handleMealRemove() {
    Alert.alert("Remover", `Realmente gostaria de remover a refeição ?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => mealDelete(),
      },
    ]);
  }

  return (
    <ModalDeleteArea
      animationType="fade"
      transparent
      visible={modalDelete}
      statusBarTranslucent={true}
    >
      <Container>
        <AreaModal>
          <Title>Deseja realmente excluir o registro da refeição? </Title>
          <AreaButton>
            <ButtonCancel
              title="Cancelar"
              type="SECONDARY"
              onPress={closedModal}
            />
            <Button title="Sim, excluir" onPress={handleMealRemove} />
          </AreaButton>
        </AreaModal>
      </Container>
    </ModalDeleteArea>
  );
}
