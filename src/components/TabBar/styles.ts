import styled from "styled-components/native";

export const TabBarContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  padding: 26px;
`;

export const TabBarButton = styled.TouchableWithoutFeedback``;

export const TabBarIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
