import { ViewBackButton, ViewContainer, ViewDescription, ViewFooter, ViewFooterButton, ViewFooterButtonText, ViewFooterPrice, ViewFooterPriceLabel, ViewFooterPriceText, ViewImage, ViewImageBack, ViewImageContainer, ViewSubTitle, ViewTitle } from './styles';

import Image from "../../components/Image";
import Icon from "../../components/Icon";

export function ViewScreen({ navigation, route }) {
  const data = route.params;

  return (
    <ViewContainer>
      <ViewImageContainer>
        <ViewBackButton onPress={() => navigation.goBack()} >
          <ViewImageBack source={Icon['icon-back'].uri} />
        </ViewBackButton>
        <ViewImage source={Image['image-1-large'].uri} />
      </ViewImageContainer>

      <ViewTitle>{data.title}</ViewTitle>
      <ViewSubTitle>{data.type}</ViewSubTitle>
      <ViewDescription>{data.description}... Read More.</ViewDescription>

      <ViewFooter>
        <ViewFooterPrice>
          <ViewFooterPriceLabel>Price</ViewFooterPriceLabel>
          <ViewFooterPriceText>{data.price}</ViewFooterPriceText>
        </ViewFooterPrice>
        <ViewFooterButton onPress={() => console.log('Buy Now')}>
          <ViewFooterButtonText>BUY NOW</ViewFooterButtonText>
        </ViewFooterButton>
      </ViewFooter>
    </ViewContainer>
  )
}