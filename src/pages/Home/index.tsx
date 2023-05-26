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
  RightContainer,
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
    } []
  } []
}


export function Home() {
  const [product, setProduct] = useState<HamburguerProps | null>(null);

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
                      <IconButton>
                        <Minus size={16} color="#D80000" />
                      </IconButton>
                      2
                      <IconButton>
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
                    {product?.ingredients[0].itens[0].nm_item}
                  </AddIngredientsContainerTitle>
                  </AddIngredientsContainerTitleContainer>
  
                  <AddIngredientsContainerBoxCountContainer>
                    <AddIngredientsContainerBoxCount>
                      <IconButton>
                        <Minus size={16} color="#D80000" />
                      </IconButton>
                      2
                      <IconButton>
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
                    {product?.ingredients[0].itens[0].nm_item}
                  </AddIngredientsContainerTitle>
                  </AddIngredientsContainerTitleContainer>
  
                  <AddIngredientsContainerBoxCountContainer>
                    <AddIngredientsContainerBoxCount>
                      <IconButton>
                        <Minus size={16} color="#D80000" />
                      </IconButton>
                      2
                      <IconButton>
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
                    {product?.ingredients[0].itens[0].nm_item}
                  </AddIngredientsContainerTitle>
                  </AddIngredientsContainerTitleContainer>
  
                  <AddIngredientsContainerBoxCountContainer>
                    <AddIngredientsContainerBoxCount>
                      <IconButton>
                        <Minus size={16} color="#D80000" />
                      </IconButton>
                      2
                      <IconButton>
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
            </IngredientsContainer>
          </RightContainer>
        </Container>
      </>
    </>
  );
}
