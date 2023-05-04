import React from "react";
import { Container, ImgUser, Logo } from "./styles";
import LogoIcon from "@assets/Logo.png";
import LogoUser from "@assets/usuario.png";

export function Header() {
  return (
    <Container>
      <Logo source={LogoIcon} />
      <ImgUser source={LogoUser} />
    </Container>
  );
}
