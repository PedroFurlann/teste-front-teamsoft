import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  gap: 10rem;
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
  width: 50%;
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
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 96px;
`