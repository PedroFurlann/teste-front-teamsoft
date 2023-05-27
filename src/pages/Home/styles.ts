import Popup from "reactjs-popup";
import { styled } from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: #FFFFFF;
`

export const ContainerBody = styled.div`
  background-color: #fff;
  display: flex;
  gap: 5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }
`

export const ImgContainer = styled.div`
  margin-bottom: 4rem;
`


export const HamburguerImg = styled.img`
  width: 597px;
  height: 388px;
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 343px;
    height: 130px;
    display: none;
  }
`

export const HamburguerImgMobile = styled.img`
  display: none;

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`

export const LeftContainer = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  padding: 96px;

  @media (max-width: 1200px) {
    padding: 0;
    width: 100%;
  }
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

  @media (max-width: 1200px) {
    font-size: 22px;
    line-height: 16px;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 16px;
  }
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

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 20px;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 20px;
  }
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

  @media (max-width: 1200px) {
    font-size: 22px;
    line-height: 16px;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 16px;
  }
`

export const OriginalPrice = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  text-decoration-line: line-through;
  color: #4E4E4E;

  @media (max-width: 1200px) {
    font-size: 22px;
    line-height: 16px;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 16px;
  }
`

export const RightContainer = styled.div`
  width: 42%;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 106px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0
  }
`

export const IngredientsContainer = styled.div`
  padding: 42px;
  border: 1px solid #4E4E4E;
  border-radius: 8px;

  @media (max-width: 1200px) {
    border: none;
    padding: 0;
  }
`

export const HeaderIngredientsContainer = styled.div`
  height: 55px;
  background: rgba(253, 215, 14, 0.2);
  padding-left: 1rem;
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
  margin-bottom: 1.2rem;
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
  align-items: center;
  justify-content: space-around;
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

  &:disabled {
    opacity: 0.4;
    cursor: auto;
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

export const QuestionContainer = styled.div`
  height: 55px;
  background: rgba(253, 215, 14, 0.2);
  padding-left: 1rem;
  padding-top: 10px;
  margin-bottom: 1.4rem;
`

export const TextQuestion = styled.p`
  color: #4E4E4E;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`

export const FooterRightContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const FooterRightContainerBoxCount = styled.div`
  height: 50px;
  width: 40%;
  border: 1px solid #F09035;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const FooterRightContainerAddButon = styled.button`
  height: 50px;
  border-radius: 4px;
  width: 60%;
  background: #F09035;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export const FooterRightContainerTextAdd = styled.p`
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.33px;
`

export const Popover = styled(Popup)`
`

export const PopoverContainer = styled.div`
  height: 200px;
  width: 220px;
  background: #F8F8F8;
`

export const HeaderPopover = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-bottom: 0.6rem;
  background: #F09035;

`

export const HeaderPopoverText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 100%;
  color: #FFFFFF;
`

export const BodyPopover = styled.div`
  padding: 0.9rem;
  background: #F8F8F8;
`

export const TitleBodyPopover = styled.p`
  color: #bc2e31;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 0.6rem;
`

export const HeaderListBodyPopover = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #4E4E4E;
  margin-bottom: 0.35rem;
`

export const ListBodyPopover = styled.ul`
  padding-left: 1.2rem;
`

export const ItemListBodyPopover = styled.li`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #4E4E4E;
  margin-bottom: 0.2rem;
`

export const TextAndIconContainer = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.7rem;
  }
  
`

export const TextForIconMobile = styled.p`
  font-family: 'Roboto' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #4E4E4E;
`