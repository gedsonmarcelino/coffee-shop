import React from "react";
import ProfileImage from '../../assets/images/profile.png';

import { Col, Image, Row, Text } from "native-styled-wind";

export function Header() {
  return (
    <Row styles="justify-between items-center p-3 px-4 w-full">
      <Col>
        <Text styles="text-secondary-dark text-4xl">déjà</Text>
        <Text styles="text-secondary text-5xl">Brew</Text>
      </Col>
      <Image source={ProfileImage} />
    </Row>
  );
}
