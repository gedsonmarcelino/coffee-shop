
import ImageDB from "../../components/Image";
import IconDB from "../../components/Icon";
import { Image, Button, Row, Text, View } from '../../lib/stylish';

export function ViewScreen({ navigation, route }) {
  const data = route.params;

  return (
    <View styles="bg-primary-dark p-4">
      <View styles="relative z-0 mb-4">
        <Button styles="absolute z-10 top-7 left-5" onPress={() => navigation.goBack()} >
          <Image source={IconDB['icon-back'].uri} />
        </Button>
        <Image source={ImageDB['image-1-large'].uri} />
      </View>

      <Text styles="text-2xl mb-2">{data.title}</Text>
      <Text styles="text-base mb-2">{data.type}</Text>
      <Text styles="text-sm mb-5">{data.description}... Read More</Text>

      <Row styles="justify-between">
        <View>
          <Text styles="text-sm">Price</Text>
          <Text styles="text-2xl bold">$ {data.price}</Text>
        </View>
        <Button styles="rounded-2xl bg-secondary items-center justify-center w-{250}" onPress={() => console.log('Buy Now')}>
          <Text styles="text-black text-sm">BUY NOW</Text>
        </Button>
      </Row>
    </View>
  )
}