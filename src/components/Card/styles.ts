import styled from "styled-components/native";

export const CardContainer = styled.View`
  width: 144px;
  background-color: ${(props) => props.theme.colors.primaryLight};
  padding: 12px;
  border-radius: 12px;
  justify-content: center;
`;

export const CardImageButton = styled.TouchableOpacity``;

export const CardImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 111px;
  margin-bottom: 8px;
`;

export const CardTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 13px;
`;

export const CardPrice = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.primaryLighter};
  padding: 11px;
  border-radius: 12px;
  align-items: center;
  position: relative;
`;

export const CardPriceText = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  background-color: #3f3f3f;
  width: 100%;
  padding-right: 40px;
`;

export const CardPriceButton = styled.TouchableOpacity`
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 15px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const CardPriceIcon = styled.Image``;
