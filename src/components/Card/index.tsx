import React from 'react';
import ImageDB from '../Image'
import IconDB from '../Icon'

import { Image, Button, Text, Row, View } from 'native-styled-wind';

export const Card = ({ navigation, data }) => {
  return (<View styles="w-{144} p-3 rounded-2xl justify-center" style={{ backgroundColor: '#362C36' }}>
    <Button styles="w-{111} h-{111}  mb-2 " onPress={() => navigation.navigate('View', { ...data })} >
      <Image styles="w-full h-{111} rounded-2xl" source={ImageDB[data.image].uri} />
    </Button>
    <Text styles="text-sm mb-3.5">{data.title}</Text>
    <Row styles="p-{11} rounded-lg relative" style={{ backgroundColor: '#463D46' }}>
      <Text styles="w-full text-center pr-10">$ {data.price}</Text>
      <Button styles="rounded-lg p-4 absolute" style={{ backgroundColor: '#EFE3C8', top: 0, right: 0 }}>
        <Image source={IconDB['icon-add'].uri} />
      </Button>
    </Row>
  </View>);
}
