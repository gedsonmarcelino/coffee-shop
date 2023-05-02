import { BackButton, Container, Description, Footer, FooterButton, FooterButtonText, FooterPrice, FooterPriceLabel, FooterPriceText, Image, ImageBack, ImageContainer, SubTitle, Title } from './styles';

import ImageDB from "../../components/Image";
import IconDB from "../../components/Icon";

export function ViewScreen({ navigation, route }) {
  const data = route.params;

  return (
    <Container>
      <ImageContainer>
        <BackButton onPress={() => navigation.goBack()} >
          <ImageBack source={IconDB['icon-back'].uri} />
        </BackButton>
        <Image source={ImageDB['image-1-large'].uri} />
      </ImageContainer>

      <Title>{data.title}</Title>
      <SubTitle>{data.type}</SubTitle>
      <Description>{data.description}... Read More.</Description>

      <Footer>
        <FooterPrice>
          <FooterPriceLabel>Price</FooterPriceLabel>
          <FooterPriceText>$ {data.price}</FooterPriceText>
        </FooterPrice>
        <FooterButton onPress={() => console.log('Buy Now')}>
          <FooterButtonText>BUY NOW</FooterButtonText>
        </FooterButton>
      </Footer>
    </Container>
  )
}