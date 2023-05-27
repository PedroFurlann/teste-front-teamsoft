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
  Container,
  ContainerPrices,
  ContainerProductDescription,
  ContainerProductTitle,
  FooterRightContainer,
  FooterRightContainerAddButon,
  FooterRightContainerBoxCount,
  FooterRightContainerTextAdd,
  HamburguerImg,
  HeaderIngredientsContainer,
  HeaderIngredientsContainerSubtitle,
  HeaderIngredientsContainerTitle,
  IconButton,
  ImgContainer,
  IngredientsContainer,
  LeftContainer,
  NewPrice,
  OriginalPrice,
  ProductDescription,
  ProductTitle,
  QuestionContainer,
  RightContainer,
  TextQuestion,
} from "./styles";
import hamburguer from "../../assets/foto.jpg";
import { Minus, Plus } from "phosphor-react";

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
  const [queijoCheddarQuantity, setQueijoCheddarQuantity] = useState(0)
  const [cebolaCrispyQuantity, setCebolaCrispyQuantity] = useState(0)
  const [molhoCheddarQuantity, setMolhoCheddarQuantity] = useState(0)
  const [molhoDePicanhaQuantity, setMolhoDePicanhaQuantity] = useState(0)
  const [talheresQuantity, setTalheresQuantity] = useState(0)
  const [additionalTotal, setAdditionalTotal] = useState(0)

  function addQueijoCheddarQuantity() {
    if (additionalTotal >= 8) {
      return alert('Não é possível colocar mais ingredientes adicionais.')
    }

    setQueijoCheddarQuantity((state) => state + 1)
    setAdditionalTotal((state) => state + 1)
  }

  function decreaseQueijoCheddarQuantity() {
    if(queijoCheddarQuantity <= 0) {
      return alert('A quantidade desse adicional já é 0.')
  }

    setQueijoCheddarQuantity((state) => state - 1)
    setAdditionalTotal((state) => state - 1)
  }

  function addCebolaCrispyQuantity() {
    if (additionalTotal >= 8) {
      return alert('Não é possível colocar mais ingredientes adicionais.')
    }

    setCebolaCrispyQuantity((state) => state + 1)
    setAdditionalTotal((state) => state + 1)
  }

  function decreaseCebolaCrispyQuantity() {
    if(cebolaCrispyQuantity <= 0) {
      return alert('A quantidade desse adicional já é 0.')
  }

    setCebolaCrispyQuantity((state) => state - 1)
    setAdditionalTotal((state) => state - 1)
  }

  function addMolhoCheddarQuantity() {
    if (additionalTotal >= 8) {
      return alert('Não é possível colocar mais ingredientes adicionais.')
    }

    setMolhoCheddarQuantity((state) => state + 1)
    setAdditionalTotal((state) => state + 1)
  }

  function decreaseMolhoCheddarQuantity() {
    if(molhoCheddarQuantity <= 0) {
      return alert('A quantidade desse adicional já é 0.')
  }

    setMolhoCheddarQuantity((state) => state - 1)
    setAdditionalTotal((state) => state - 1)
  }

  function addMolhoDePicanhaQuantity() {
    if (additionalTotal >= 8) {
      return alert('Não é possível colocar mais ingredientes adicionais.')
    }

    setMolhoDePicanhaQuantity((state) => state + 1)
    setAdditionalTotal((state) => state + 1)
  }

  function decreaseMolhoDePicanhaQuantity() {
    if(molhoDePicanhaQuantity <= 0) {
      return alert('A quantidade desse adicional já é 0.')
  }

    setMolhoDePicanhaQuantity((state) => state - 1)
    setAdditionalTotal((state) => state - 1)
  }

  function addTalheresQuantity() {
    if (talheresQuantity >= 8) {
      return alert('Não é possível adicionar mais talheres')
    }

    setTalheresQuantity((state) => state + 1)
  }

  function decreaseTalheresQuantity() {
    if(talheresQuantity <= 0) {
      return alert('A quantidade de talheres já é 0.')
  }

    setTalheresQuantity((state) => state - 1)
  }



  async function fetchHamburguerProps() {
    try {
      const response = await axios.get<HamburguerProps[]>(
        "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products"
      );
      setProduct(response.data[0]); // Assuming the response contains an array of products and we want to save the first product in the state
    } catch (error) {
      console.log("Erro ao Buscar dados", error);
    }
  }

  useEffect(() => {
    fetchHamburguerProps();
  }, []);

  return (
    <>
      <>
        <Header />
        <Container>
          <LeftContainer>
            <ImgContainer>
              <HamburguerImg src={hamburguer} />
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
                    <IconButton onClick={decreaseQueijoCheddarQuantity}>
                      <Minus size={16} color="#D80000" />
                    </IconButton>
                    {queijoCheddarQuantity}
                    <IconButton onClick={addQueijoCheddarQuantity}>
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
                    <IconButton onClick={decreaseCebolaCrispyQuantity}>
                      <Minus size={16} color="#D80000" />
                    </IconButton>
                    {cebolaCrispyQuantity}
                    <IconButton onClick={addCebolaCrispyQuantity}>
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
                    <IconButton onClick={decreaseMolhoCheddarQuantity}>
                      <Minus size={16} color="#D80000" />
                    </IconButton>
                    {molhoCheddarQuantity}
                    <IconButton onClick={addMolhoCheddarQuantity}>
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
                    <IconButton onClick={decreaseMolhoDePicanhaQuantity}>
                      <Minus size={16} color="#D80000" />
                    </IconButton>
                    {molhoDePicanhaQuantity}
                    <IconButton onClick={addMolhoDePicanhaQuantity}>
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
              <FooterRightContainer>
                <FooterRightContainerBoxCount>
                  <IconButton onClick={decreaseTalheresQuantity}>
                    <Minus size={16} color="#D80000" />
                  </IconButton>
                  {talheresQuantity}
                  <IconButton onClick={addTalheresQuantity}>
                    <Plus size={16} color="#D80000" />
                  </IconButton>
                </FooterRightContainerBoxCount>
                <FooterRightContainerAddButon>
                  <FooterRightContainerTextAdd>
                    Adicionar
                  </FooterRightContainerTextAdd>
                </FooterRightContainerAddButon>
              </FooterRightContainer>
            </IngredientsContainer>
          </RightContainer>
        </Container>
      </>
    </>
  );
}
