import { styled } from "styled-components";

export const GlobalContainer = styled.div`
  @media (max-width: 1200px) {
    div {
      display: none;
    }

    header {
      display: flex;
    }
  }
`

export const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #F4F4F4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export const Img = styled.img`
  object-fit: cover;
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  margin-right: 4rem;
`

export const IconAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`

export const TextForIcon = styled.p`
  color: #ED3237;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
`

export const ContainerMobile = styled.header`
  width: 100%;
  padding-left: 3rem;
  height: 80px;
  display: none;
  align-items: center;
  background: #F4F4F4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export const ImgMobile = styled.img`
justify-self: center;
`

export const SectionMobile = styled.section`
  width: 100%;
  display: flex;
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



