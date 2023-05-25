import { Container, ContainerMobile, GlobalContainer, ImgLocal, ImgLogo } from "./styles";
import logo from "../../assets/logo.png";
import local from "../../assets/address.png";
import { ArrowLeft } from "phosphor-react";

export function Header() {
  return (
    <GlobalContainer>
      <ContainerMobile>
        <ArrowLeft size={12} />
        <ImgLogo src={logo} />
      </ContainerMobile>
      <Container>
        <ImgLogo src={logo} />
        <ImgLocal src={local} />
      </Container>
    </GlobalContainer>
  );
}
