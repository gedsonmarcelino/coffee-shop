import React from 'react';
import { CardContainer, CardImage, CardPrice, CardPriceButton, CardPriceIcon, CardPriceText, CardTitle } from './styles';
import Image1 from '../../assets/images/image-1.png';
import IconAdd from '../../assets/images/icon-add.png';

export function Card() {
  return (<CardContainer>
    <CardImage source={Image1} />
    <CardTitle >Cinnamon & Cocoa</CardTitle>
    <CardPrice>
      <CardPriceText>$99</CardPriceText>
      <CardPriceButton>
        <CardPriceIcon source={IconAdd} />
      </CardPriceButton>
    </CardPrice>
  </CardContainer>);
}
