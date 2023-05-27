import {
  Container,
  ContainerMobile,
  GlobalContainer,
  IconAndTextContainer,
  IconButton,
  Img,
  ImgMobile,
  RightHeader,
  SectionMobile,
  TextForIcon,
} from "./styles";
import logo from "../../assets/logo.png";
import entrega from "../../assets/Entrega.png";
import input from "../../assets/input.jpg";
import { ArrowLeft, ShoppingCart, UserCircle } from "phosphor-react";

export function Header() {
  return (
    <GlobalContainer>
      <Container>
        <Img src={logo} alt="Restaurant logo" />
        <RightHeader>
          <Img src={entrega} alt="Address" />
          <Img src={input} alt="Search local or products" />
          <IconAndTextContainer>
            <UserCircle color="#ED3237" size={32} weight="bold" />
            <IconButton>
              <TextForIcon>Entrar</TextForIcon>
            </IconButton>
          </IconAndTextContainer>
          <IconAndTextContainer>
            <ShoppingCart color="#ED3237" size={32} weight="bold" />
            <IconButton>
              <TextForIcon>Carrinho</TextForIcon>
            </IconButton>
          </IconAndTextContainer>
        </RightHeader>
      </Container>
      <ContainerMobile>
        <IconButton>
          <ArrowLeft color="#686868" size={32} />
        </IconButton>
        <SectionMobile>
          <ImgMobile src={logo} />
        </SectionMobile>
      </ContainerMobile>
    </GlobalContainer>
  );
}
