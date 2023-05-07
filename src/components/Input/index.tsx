import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  maxHeightInput?: number;
};

export function Input({ inputRef, maxHeightInput = 48, ...rest }: Props) {
  return <Container ref={inputRef} maxHeightInput={maxHeightInput} {...rest} />;
}
