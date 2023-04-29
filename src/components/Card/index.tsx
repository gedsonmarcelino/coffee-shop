import React from 'react';
import { CardContainer, CardImage, CardImageButton, CardPrice, CardPriceButton, CardPriceIcon, CardPriceText, CardTitle } from './styles';
import Image1 from '../../assets/images/image-1.png';
import IconAdd from '../../assets/images/icon-add.png';

export function Card({ navigation }) {
  return (<CardContainer>
    <CardImageButton onPress={() => navigation.navigate('View')}>
      <CardImage source={Image1} />
    </CardImageButton>
    <CardTitle >Cinnamon & Cocoa</CardTitle>
    <CardPrice>
      <CardPriceText>$99</CardPriceText>
      <CardPriceButton>
        <CardPriceIcon source={IconAdd} />
      </CardPriceButton>
    </CardPrice>
  </CardContainer>);
}
