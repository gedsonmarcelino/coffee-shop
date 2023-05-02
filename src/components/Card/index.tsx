import React from 'react';
import { Container, Image, ImageButton, Price, PriceButton, PriceIcon, PriceText, Title } from './styles';
import ImageDB from '../Image'
import IconDB from '../Icon'

export const Card = ({ navigation, data }) => {
  return (<Container>
    <ImageButton onPress={() => navigation.navigate('View', { ...data })} >
      <Image source={ImageDB[data.image].uri} />
    </ImageButton>
    <Title>{data.title}</Title>
    <Price>
      <PriceText>$ {data.price}</PriceText>
      <PriceButton>
        <PriceIcon source={IconDB['icon-add'].uri} />
      </PriceButton>
    </Price>
  </Container>);
}
