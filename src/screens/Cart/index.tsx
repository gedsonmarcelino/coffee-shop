import { View, Col, Image, Row, Text, Button } from 'native-styled-wind';

import ImageDB from "../../components/Image";

export function CartScreen() {
  return (
    <View styles="bg-primary-dark p-4">
      <Text styles="text-2xl text-center mb-5">Cart</Text>

      {[1, 2, 3].map(value => (
        <Row key={value} styles="justify-between items-center rounded-2xl bg-primary-light p-3 mb-4">
          <Row>
            <Image source={ImageDB['americano'].uri} styles="rounded-2xl w-{72} h-{72} mr-3" />
            <Col styles="justify-center items-start">
              <Text styles="text-sm pb-2">Cappuccino</Text>
              <Text styles="text-base font-bold">$ 299</Text>
            </Col>

          </Row>
          <Row>
            <Button styles="justify-center items-center bg-secondary rounded-lg">
              <Text styles="text-black px-3">-</Text>
            </Button>
            <Text styles="text-xl px-4">1</Text>
            <Button styles="justify-center items-center bg-secondary rounded-lg">
              <Text styles="text-black px-3">+</Text>
            </Button>
          </Row>
        </Row>
      ))}

      <View styles="border-dashed border border-secondary-dark mb-5" />

      <Row styles="justify-between mb-2">
        <Text styles="text-base">Delivery Charges</Text>
        <Text styles="text-base bold">$49</Text>
      </Row>
      <Row styles="justify-between mb-5">
        <Text styles="text-base">Taxes</Text>
        <Text styles="text-base bold">$64.87</Text>
      </Row>

      <View styles="border-dashed border border-secondary-dark mb-5" />

      <Row styles="justify-between mb-5">
        <Text styles="text-2xl">Taxes</Text>
        <Text styles="text-2xl bold">$1064.87</Text>
      </Row>

      <Button styles="justify-center items-center bg-secondary rounded-lg">
        <Text styles="text-lg text-black px-3 py-2.5">PAY NOW</Text>
      </Button>

    </View>
  )
}