import styled from "styled-components/native";

export const ViewContainer = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primaryDark};
  padding: 16px;
  z-index: 999;
`;

export const ViewImageContainer = styled.View`
  position: relative;
  margin-bottom: 16px;
`;
export const ViewImage = styled.Image``;
export const ViewBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 10px;
  z-index: 1;
`;
export const ViewImageBack = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ViewTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 8px;
`;
export const ViewSubTitle = styled(ViewTitle)`
  font-size: 16px;
`;
export const ViewDescription = styled(ViewSubTitle)`
  font-size: 14px;
  margin-bottom: 30px;
`;

export const ViewFooter = styled.View`
  flex-direction: row;
`;
export const ViewFooterPrice = styled.View`
  flex-direction: column;
  flex: 1;
`;
export const ViewFooterPriceLabel = styled(ViewDescription)`
  margin-bottom: 9px;
`;
export const ViewFooterPriceText = styled(ViewTitle)`
  margin-bottom: 0;
`;
export const ViewFooterButton = styled.TouchableOpacity`
  flex: 3;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;
export const ViewFooterButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.primaryDark};
  font-size: 14px;
`;
