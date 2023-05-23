import { Container, ImgLocal, ImgLogo } from "./styles";
import logo from "../../assets/logo.png";
import local from "../../assets/address.png";

export function Header() {
  return (
    <Container>
      <ImgLogo src={logo} />
      <ImgLocal src={local} />
    </Container>
  );
}
