import { styled } from "styled-components";

export const GlobalContainer = styled.div`
  @media (max-width: 768px) {
    header {
      display: none;
    }

    div {
      display: flex;
    }
  }
`

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  gap: 2rem;
  background-color: #F4F4F4;
  justify-content: space-around;
`

export const ImgLogo = styled.img`
`

export const ImgLocal = styled.img`
`

export const ContainerMobile = styled.div`
  display: none;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #F4F4F4;
  justify-content: space-around;



`