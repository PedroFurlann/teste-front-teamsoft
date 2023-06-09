import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import {
  AddIngredientsContainer,
  AddIngredientsContainerBoxCount,
  AddIngredientsContainerBoxCountContainer,
  AddIngredientsContainerIconPrice,
  AddIngredientsContainerLine,
  AddIngredientsContainerPrice,
  AddIngredientsContainerTitle,
  AddIngredientsContainerTitleContainer,
  AddIngredientsPrice,
  BodyPopover,
  Container,
  ContainerBody,
  ContainerPrices,
  ContainerProductDescription,
  ContainerProductTitle,
  FooterRightContainer,
  FooterRightContainerAddButon,
  FooterRightContainerBoxCount,
  FooterRightContainerTextAdd,
  HamburguerImg,
  HamburguerImgMobile,
  HeaderIngredientsContainer,
  HeaderIngredientsContainerSubtitle,
  HeaderIngredientsContainerTitle,
  HeaderListBodyPopover,
  HeaderPopover,
  HeaderPopoverText,
  IconButton,
  ImgContainer,
  IngredientsContainer,
  ItemListBodyPopover,
  LeftContainer,
  ListBodyPopover,
  NewPrice,
  OriginalPrice,
  Popover,
  PopoverContainer,
  ProductDescription,
  ProductTitle,
  QuestionContainer,
  RightContainer,
  TextAndIconContainer,
  TextForIconMobile,
  TextQuestion,
  TitleBodyPopover,
} from "./styles";
import hamburguer from "../../assets/foto.jpg";
import hamburguerMobile from "../../assets/fotoMobile.png";
import { Circle, Minus, Plus, RadioButton } from "phosphor-react";
import { Loading } from "../../components/Loading";

interface HamburguerProps {
  id: string;
  createdAt: string;
  nm_product: string;
  description: string;
  vl_price: number;
  vl_discount: number;
  url_image: string;
  ingredients: {
    group: string;
    max_itens: number;
    type: string;
    itens: {
      id: number;
      nm_item: string;
      vl_item: number;
    }[];
  }[];
}

export function Home() {
  const [product, setProduct] = useState<HamburguerProps | null>(null);
  const [queijoCheddarQuantity, setQueijoCheddarQuantity] = useState(0);
  const [cebolaCrispyQuantity, setCebolaCrispyQuantity] = useState(0);
  const [molhoCheddarQuantity, setMolhoCheddarQuantity] = useState(0);
  const [molhoDePicanhaQuantity, setMolhoDePicanhaQuantity] = useState(0);
  const [talheresQuantity, setTalheresQuantity] = useState(0);
  const [additionalTotal, setAdditionalTotal] = useState(0);
  const [needCutleryYes, setNeedCutleryYes] = useState(false);
  const [needCutleryNo, setNeedCutleryNo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function changeNeedCutleryForYes() {
    if (needCutleryYes === false) {
      setNeedCutleryYes(true);
      setNeedCutleryNo(false);
    }

    if (needCutleryYes === true) {
      setNeedCutleryYes(false);
      setNeedCutleryNo(true);
    }
  }

  function changeNeedCutleryForNo() {
    if (needCutleryNo === false) {
      setNeedCutleryNo(true);
      setNeedCutleryYes(false);
    }

    if (needCutleryNo === true) {
      setNeedCutleryNo(false);
      setNeedCutleryYes(true);
    }
  }

  function addQueijoCheddarQuantity() {
    if (additionalTotal >= 8) {
      return alert("Não é possível colocar mais ingredientes adicionais.");
    }

    setQueijoCheddarQuantity((state) => state + 1);
    setAdditionalTotal((state) => state + 1);
  }

  function decreaseQueijoCheddarQuantity() {
    if (queijoCheddarQuantity <= 0) {
      return alert("A quantidade desse adicional já é 0.");
    }

    setQueijoCheddarQuantity((state) => state - 1);
    setAdditionalTotal((state) => state - 1);
  }

  function addCebolaCrispyQuantity() {
    if (additionalTotal >= 8) {
      return alert("Não é possível colocar mais ingredientes adicionais.");
    }

    setCebolaCrispyQuantity((state) => state + 1);
    setAdditionalTotal((state) => state + 1);
  }

  function decreaseCebolaCrispyQuantity() {
    if (cebolaCrispyQuantity <= 0) {
      return alert("A quantidade desse adicional já é 0.");
    }

    setCebolaCrispyQuantity((state) => state - 1);
    setAdditionalTotal((state) => state - 1);
  }

  function addMolhoCheddarQuantity() {
    if (additionalTotal >= 8) {
      return alert("Não é possível colocar mais ingredientes adicionais.");
    }

    setMolhoCheddarQuantity((state) => state + 1);
    setAdditionalTotal((state) => state + 1);
  }

  function decreaseMolhoCheddarQuantity() {
    if (molhoCheddarQuantity <= 0) {
      return alert("A quantidade desse adicional já é 0.");
    }

    setMolhoCheddarQuantity((state) => state - 1);
    setAdditionalTotal((state) => state - 1);
  }

  function addMolhoDePicanhaQuantity() {
    if (additionalTotal >= 8) {
      return alert("Não é possível colocar mais ingredientes adicionais.");
    }

    setMolhoDePicanhaQuantity((state) => state + 1);
    setAdditionalTotal((state) => state + 1);
  }

  function decreaseMolhoDePicanhaQuantity() {
    if (molhoDePicanhaQuantity <= 0) {
      return alert("A quantidade desse adicional já é 0.");
    }

    setMolhoDePicanhaQuantity((state) => state - 1);
    setAdditionalTotal((state) => state - 1);
  }

  function addTalheresQuantity() {
    if (talheresQuantity >= 8) {
      return alert("Não é possível adicionar mais talheres");
    }

    setTalheresQuantity((state) => state + 1);
  }

  function decreaseTalheresQuantity() {
    if (talheresQuantity <= 0) {
      return alert("A quantidade de talheres já é 0.");
    }

    setTalheresQuantity((state) => state - 1);
  }

  function finishOrder() {
    console.log("ola");
  }

  async function fetchHamburguerProps() {
    try {
      setIsLoading(true);
      const response = await axios.get<HamburguerProps[]>(
        "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products"
      );
      setProduct(response.data[0]);
    } catch (error) {
      console.log("Erro ao Buscar dados", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchHamburguerProps();
  }, []);

  return (
    <Container>
      <Header />
      {isLoading === true ? (
        <Loading />
      ) : (
        <ContainerBody>
          <LeftContainer>
            <ImgContainer>
              <HamburguerImg src={hamburguer} alt="Hamburguer" />
              <HamburguerImgMobile src={hamburguerMobile} alt="Hamburguer" />
            </ImgContainer>
            <ContainerProductTitle>
              <ProductTitle>{product?.nm_product}</ProductTitle>
            </ContainerProductTitle>
            <ContainerProductDescription>
              <ProductDescription>{product?.description}</ProductDescription>
            </ContainerProductDescription>
            <ContainerPrices>
              <NewPrice>R${product?.vl_discount}</NewPrice>
              <OriginalPrice>R${product?.vl_price}</OriginalPrice>
            </ContainerPrices>
          </LeftContainer>
          <RightContainer>
            <IngredientsContainer>
              <HeaderIngredientsContainer>
                <HeaderIngredientsContainerTitle>
                  Adicionar Ingredientes
                </HeaderIngredientsContainerTitle>
                <HeaderIngredientsContainerSubtitle>
                  Até 8 ingredientes
                </HeaderIngredientsContainerSubtitle>
              </HeaderIngredientsContainer>
              <AddIngredientsContainer>
                <AddIngredientsContainerTitleContainer>
                  <AddIngredientsContainerTitle>
                    {product?.ingredients[0].itens[0].nm_item}
                  </AddIngredientsContainerTitle>
                </AddIngredientsContainerTitleContainer>

                <AddIngredientsContainerBoxCountContainer>
                  <AddIngredientsContainerBoxCount>
                    <IconButton
                      onClick={decreaseQueijoCheddarQuantity}
                      disabled={queijoCheddarQuantity <= 0}
                    >
                      <Minus size={16} color="#D80000" />
                    </IconButton>
                    {queijoCheddarQuantity}
                    <IconButton
                      onClick={addQueijoCheddarQuantity}
                      disabled={additionalTotal >= 8}
                    >
                      <Plus size={16} color="#D80000" />
                    </IconButton>
                  </AddIngredientsContainerBoxCount>
                </AddIngredientsContainerBoxCountContainer>
                <AddIngredientsContainerPrice>
                  <AddIngredientsContainerIconPrice>
                    <Plus size={12} color="#F09035" />
                  </AddIngredientsContainerIconPrice>
                  <AddIngredientsPrice>
                    {product?.ingredients[0].itens[0].vl_item}
                  </AddIngredientsPrice>
                </AddIngredientsContainerPrice>
                <AddIngredientsContainerLine />
              </AddIngredientsContainer>
              <AddIngredientsContainer style={{ marginTop: 24 }}>
                <AddIngredientsContainerTitleContainer>
                  <AddIngredientsContainerTitle>
                    {product?.ingredients[0].itens[1].nm_item}
                  </AddIngredientsContainerTitle>
                </AddIngredientsContainerTitleContainer>

                <AddIngredientsContainerBoxCountContainer>
                  <AddIngredientsContainerBoxCount>
                    <IconButton
                      onClick={decreaseCebolaCrispyQuantity}
                      disabled={cebolaCrispyQuantity <= 0}
                    >
                      <Minus size={16} color="#D80000" />
                    </IconButton>
                    {cebolaCrispyQuantity}
                    <IconButton
                      onClick={addCebolaCrispyQuantity}
                      disabled={additionalTotal >= 8}
                    >
                      <Plus size={16} color="#D80000" />
                    </IconButton>
                  </AddIngredientsContainerBoxCount>
                </AddIngredientsContainerBoxCountContainer>
                <AddIngredientsContainerPrice>
                  <AddIngredientsContainerIconPrice>
                    <Plus size={12} color="#F09035" />
                  </AddIngredientsContainerIconPrice>
                  <AddIngredientsPrice>
                    {product?.ingredients[0].itens[1].vl_item}0
                  </AddIngredientsPrice>
                </AddIngredientsContainerPrice>
                <AddIngredientsContainerLine />
              </AddIngredientsContainer>
              <AddIngredientsContainer style={{ marginTop: 24 }}>
                <AddIngredientsContainerTitleContainer>
                  <AddIngredientsContainerTitle>
                    {product?.ingredients[0].itens[2].nm_item}
                  </AddIngredientsContainerTitle>
                </AddIngredientsContainerTitleContainer>

                <AddIngredientsContainerBoxCountContainer>
                  <AddIngredientsContainerBoxCount>
                    <IconButton
                      onClick={decreaseMolhoCheddarQuantity}
                      disabled={molhoCheddarQuantity <= 0}
                    >
                      <Minus size={16} color="#D80000" />
                    </IconButton>
                    {molhoCheddarQuantity}
                    <IconButton
                      onClick={addMolhoCheddarQuantity}
                      disabled={additionalTotal >= 8}
                    >
                      <Plus size={16} color="#D80000" />
                    </IconButton>
                  </AddIngredientsContainerBoxCount>
                </AddIngredientsContainerBoxCountContainer>
                <AddIngredientsContainerPrice>
                  <AddIngredientsContainerIconPrice>
                    <Plus size={12} color="#F09035" />
                  </AddIngredientsContainerIconPrice>
                  <AddIngredientsPrice>
                    {product?.ingredients[0].itens[2].vl_item}0
                  </AddIngredientsPrice>
                </AddIngredientsContainerPrice>
                <AddIngredientsContainerLine />
              </AddIngredientsContainer>
              <AddIngredientsContainer style={{ marginTop: 24 }}>
                <AddIngredientsContainerTitleContainer>
                  <AddIngredientsContainerTitle>
                    {product?.ingredients[0].itens[3].nm_item}
                  </AddIngredientsContainerTitle>
                </AddIngredientsContainerTitleContainer>

                <AddIngredientsContainerBoxCountContainer>
                  <AddIngredientsContainerBoxCount>
                    <IconButton
                      onClick={decreaseMolhoDePicanhaQuantity}
                      disabled={molhoDePicanhaQuantity <= 0}
                    >
                      <Minus size={16} color="#D80000" />
                    </IconButton>
                    {molhoDePicanhaQuantity}
                    <IconButton
                      onClick={addMolhoDePicanhaQuantity}
                      disabled={additionalTotal >= 8}
                    >
                      <Plus size={16} color="#D80000" />
                    </IconButton>
                  </AddIngredientsContainerBoxCount>
                </AddIngredientsContainerBoxCountContainer>
                <AddIngredientsContainerPrice>
                  <AddIngredientsContainerIconPrice>
                    <Plus size={12} color="#F09035" />
                  </AddIngredientsContainerIconPrice>
                  <AddIngredientsPrice>
                    {product?.ingredients[0].itens[3].vl_item}0
                  </AddIngredientsPrice>
                </AddIngredientsContainerPrice>
                <AddIngredientsContainerLine />
              </AddIngredientsContainer>
              <QuestionContainer>
                <TextQuestion>{product?.ingredients[1].group}</TextQuestion>
              </QuestionContainer>
              {needCutleryYes ? (
                <TextAndIconContainer>
                  <TextForIconMobile>Sim</TextForIconMobile>
                  <IconButton onClick={changeNeedCutleryForYes}>
                    <RadioButton color="#FEBC10" size={20} weight="fill" />
                  </IconButton>
                </TextAndIconContainer>
              ) : (
                <TextAndIconContainer>
                  <TextForIconMobile>Sim</TextForIconMobile>
                  <IconButton onClick={changeNeedCutleryForYes}>
                    <Circle color="#FEBC10" size={20} />
                  </IconButton>
                </TextAndIconContainer>
              )}
              {needCutleryNo ? (
                <TextAndIconContainer style={{ marginBottom: 48 }}>
                  <TextForIconMobile>Não</TextForIconMobile>
                  <IconButton onClick={changeNeedCutleryForNo}>
                    <RadioButton color="#FEBC10" size={20} weight="fill" />
                  </IconButton>
                </TextAndIconContainer>
              ) : (
                <TextAndIconContainer style={{ marginBottom: 48 }}>
                  <TextForIconMobile>Não</TextForIconMobile>
                  <IconButton onClick={changeNeedCutleryForNo}>
                    <Circle color="#FEBC10" size={20} />
                  </IconButton>
                </TextAndIconContainer>
              )}
              <FooterRightContainer>
                <FooterRightContainerBoxCount>
                  <IconButton
                    onClick={decreaseTalheresQuantity}
                    disabled={needCutleryNo || talheresQuantity <= 0}
                  >
                    <Minus size={16} color="#D80000" />
                  </IconButton>
                  {talheresQuantity}
                  <IconButton
                    onClick={addTalheresQuantity}
                    disabled={needCutleryNo || talheresQuantity >= 8}
                  >
                    <Plus size={16} color="#D80000" />
                  </IconButton>
                </FooterRightContainerBoxCount>
                <Popover
                  trigger={
                    <FooterRightContainerAddButon onClick={finishOrder}>
                      <FooterRightContainerTextAdd>
                        Adicionar
                      </FooterRightContainerTextAdd>
                    </FooterRightContainerAddButon>
                  }
                  position="top center"
                >
                  <PopoverContainer>
                    <HeaderPopover>
                      <HeaderPopoverText>
                        Adicionado com sucesso
                      </HeaderPopoverText>
                    </HeaderPopover>
                    <BodyPopover>
                      <TitleBodyPopover>Oferta Cheddar Bacon</TitleBodyPopover>
                      <HeaderListBodyPopover>Adicionais:</HeaderListBodyPopover>
                      <ListBodyPopover>
                        <ItemListBodyPopover>
                          {queijoCheddarQuantity}&nbsp;Queijo Cheddar
                        </ItemListBodyPopover>
                        <ItemListBodyPopover>
                          {cebolaCrispyQuantity}&nbsp;Cebola Crispy
                        </ItemListBodyPopover>
                        <ItemListBodyPopover>
                          {molhoCheddarQuantity}&nbsp;Molho cheddar
                        </ItemListBodyPopover>
                        <ItemListBodyPopover>
                          {molhoDePicanhaQuantity}&nbsp;Molho de picanha
                        </ItemListBodyPopover>
                      </ListBodyPopover>
                    </BodyPopover>
                  </PopoverContainer>
                </Popover>
              </FooterRightContainer>
            </IngredientsContainer>
          </RightContainer>
        </ContainerBody>
      )}
    </Container>
  );
}
