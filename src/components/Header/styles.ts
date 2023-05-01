import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
`;

export const HeaderText = styled.View`
  flex: 1;
`;

export const HeaderText1 = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 36px;
  color: ${(props) => props.theme.colors.secondaryDark};
`;

export const HeaderText2 = styled.Text`
  margin-top: -20px;
  margin-bottom: -20px;

  margin-left: 5px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 48px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ProfilePicture = styled.Image``;
