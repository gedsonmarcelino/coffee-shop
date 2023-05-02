import styled from "styled-components/native";

import { Text as GlobalText } from "../../components/styled";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primaryDark};
  padding: 16px;
  z-index: 999;
`;

export const ImageContainer = styled.View`
  position: relative;
  margin-bottom: 16px;
`;
export const Image = styled.Image``;
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 10px;
  z-index: 1;
  height: 42px;
`;
export const ImageBack = styled.Image`
  width: 40px;
  height: 42px;
`;

export const Title = styled(GlobalText)`
  font-size: 24px;
  margin-bottom: 8px;
`;
export const SubTitle = styled(Title)`
  font-size: 16px;
`;
export const Description = styled(SubTitle)`
  font-size: 14px;
  margin-bottom: 30px;
`;

export const Footer = styled.View`
  flex-direction: row;
`;
export const FooterPrice = styled.View`
  flex-direction: column;
  flex: 1;
`;
export const FooterPriceLabel = styled(Description)`
  margin-bottom: 9px;
`;
export const FooterPriceText = styled(Title)`
  margin-bottom: 0;
`;
export const FooterButton = styled.TouchableOpacity`
  flex: 3;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;
export const FooterButtonText = styled(GlobalText)`
  color: ${(props) => props.theme.colors.primaryDark};
  font-size: 14px;
`;
