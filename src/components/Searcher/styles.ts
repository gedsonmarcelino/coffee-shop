import styled from "styled-components/native";

export const SearchContent = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 16px;
`;

export const SearchInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.secondaryDark,
}))`
  font-family: ${(props) => props.theme.fonts.regular};
  background-color: ${(props) => props.theme.colors.primaryDark};
  width: 100%;
  margin-left: 16px;
  margin-right: 16px;
  font-size: 14px;
  padding: 10px 20px 10px 50px;
  border-radius: 10px;
`;

export const IconSearch = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 1;
  left: 50px;
`;
