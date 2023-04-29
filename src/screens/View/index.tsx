import { ViewBackButton, ViewContainer, ViewDescription, ViewFooter, ViewFooterButton, ViewFooterButtonText, ViewFooterPrice, ViewFooterPriceLabel, ViewFooterPriceText, ViewImage, ViewImageBack, ViewImageContainer, ViewSubTitle, ViewTitle } from './styles';

import IconBack from '../../assets/images/icon-back.png'
import ImageLarge from '../../assets/images/image-1-large.png'

export function ViewScreen({ navigation }) {
  return (
    <ViewContainer>
      <ViewImageContainer>
        <ViewBackButton onPress={() => navigation.goBack()} >
          <ViewImageBack source={IconBack} />
        </ViewBackButton>
        <ViewImage source={ImageLarge} />
      </ViewImageContainer>

      <ViewTitle>Cappuccino</ViewTitle>
      <ViewSubTitle>Dizzled with Caramel</ViewSubTitle>
      <ViewDescription>A single espresso shot poured into hot foamy milk, with the surface topped with mildly sweetened cocoa powder and drizzled with scrumptious caramel syrup... Read More.</ViewDescription>

      <ViewFooter>
        <ViewFooterPrice>
          <ViewFooterPriceLabel>Price</ViewFooterPriceLabel>
          <ViewFooterPriceText>$ 249</ViewFooterPriceText>
        </ViewFooterPrice>
        <ViewFooterButton onPress={() => console.log('Buy Now')}>
          <ViewFooterButtonText>BUY NOW</ViewFooterButtonText>
        </ViewFooterButton>
      </ViewFooter>
    </ViewContainer>
  )
}