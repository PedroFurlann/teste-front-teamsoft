import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  gap: 5rem;
`

export const ImgContainer = styled.div`
  margin-bottom: 4rem;
`


export const HamburguerImg = styled.img`
  width: 597px;
  height: 388px;
  object-fit: cover;
`

export const LeftContainer = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  padding: 96px;
` 

export const ContainerProductTitle = styled.div`
  margin-bottom: 3rem;
`

export const ProductTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 28px;
  color: #4E4E4E;
`

export const ContainerProductDescription = styled.div`
  margin-bottom: 2rem;
`

export const ProductDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #4E4E4E;
`

export const ContainerPrices = styled.div`
  display: flex;
  gap: 1rem;
`

export const NewPrice = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #DC6E05;
`

export const OriginalPrice = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-decoration-line: line-through;
  color: #4E4E4E;
`

export const RightContainer = styled.div`
  width: 42%;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 106px;
`

export const IngredientsContainer = styled.div`
  padding: 42px;
  border: 1px solid #4E4E4E;
  border-radius: 8px;
`

export const HeaderIngredientsContainer = styled.div`
  height: 55px;
  background: rgba(253, 215, 14, 0.2);
  padding-left: 24px;
  padding-top: 10px;
  margin-bottom: 1rem;
`

export const ContainerTextHeaderIngredients = styled.div`
  display: flex;
`

export const HeaderIngredientsContainerTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #4E4E4E;
  margin-bottom: 6px;
`

export const HeaderIngredientsContainerSubtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  color: #E49700;
`

export const AddIngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 96px;
  background: transparent;
  padding-left: 1rem;
`

export const AddIngredientsContainerTitleContainer = styled.div`
  margin-bottom: 0.4rem;
`

export const AddIngredientsContainerTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #4E4E4E;
`

export const AddIngredientsContainerBoxCountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.7rem;
`

export const AddIngredientsContainerBoxCount = styled.div`
  height: 32px;
  width: 89px;
  border: 1px solid #F09035;
  border-radius: 5px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const AddIngredientsContainerPrice = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 6px;
`

export const AddIngredientsContainerIconPrice = styled.div``

export const AddIngredientsPrice = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #F09035;
`

export const AddIngredientsContainerLineContainer = styled.div`
    margin-bottom: 12px;

`

export const AddIngredientsContainerLine = styled.hr`
  border: 1px solid #F09035;
`