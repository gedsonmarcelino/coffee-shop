import styled from "styled-components/native";
import { Text as GlobalText } from "../styled";

export const Container = styled.View`
  width: 144px;
  background-color: ${(props) => props.theme.colors.primaryLight};
  padding: 12px;
  border-radius: 12px;
  justify-content: center;
`;

export const ImageButton = styled.TouchableOpacity`
  width: 111px;
  height: 111px;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100%;
  height: 111px;
  margin-bottom: 8px;
  border-radius: 16px;
`;

export const Title = styled(GlobalText)`
  font-size: 14px;
  margin-bottom: 13px;
`;

export const Price = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.primaryLighter};
  padding: 11px;
  border-radius: 12px;
  align-items: center;
  position: relative;
`;

export const PriceText = styled(GlobalText)`
  text-align: center;
  background-color: #3f3f3f;
  width: 100%;
  padding-right: 40px;
`;

export const PriceButton = styled.TouchableOpacity`
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 16px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const PriceIcon = styled.Image``;
