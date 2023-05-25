import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, ContainerPrices, ContainerProductDescription, ContainerProductTitle, HamburguerImg, ImgContainer, LeftContainer, NewPrice, OriginalPrice, ProductDescription, ProductTitle } from "./styles";
import hamburguer from '../../assets/foto.jpg'

interface HamburguerProps {
  id: string;
  createdAt: string;
  nm_product: string;
  description: string;
  vl_price: number;
  vl_discount: number;
  url_image: string;
  ingredients: IngredientGroup[];
}

interface IngredientItem {
  id: number;
  nm_item: string;
  vl_item: number;
}

interface IngredientGroup {
  group: string;
  max_itens: number;
  type: string;
  itens: IngredientItem[];
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
          <NewPrice>
            R${product?.vl_discount}
          </NewPrice>
          <OriginalPrice>
            R${product?.vl_price}
          </OriginalPrice>
        </ContainerPrices>
      </LeftContainer>
    </Container>
    </> 
  )
}
