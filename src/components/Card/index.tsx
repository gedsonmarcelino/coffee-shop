import React from 'react';
import { CardContainer, CardImage, CardImageButton, CardPrice, CardPriceButton, CardPriceIcon, CardPriceText, CardTitle } from './styles';
import Image from '../Image'
import Icon from '../Icon'

export function Card({ navigation, data }) {
  return (<CardContainer>
    <CardImageButton onPress={() => navigation.navigate('View', { ...data })}>
      <CardImage source={Image[data.image].uri} />
    </CardImageButton>
    <CardTitle >{data.title}</CardTitle>
    <CardPrice>
      <CardPriceText>{data.price}</CardPriceText>
      <CardPriceButton>
        <CardPriceIcon source={Icon['icon-add'].uri} />
      </CardPriceButton>
    </CardPrice>
  </CardContainer>);
}
