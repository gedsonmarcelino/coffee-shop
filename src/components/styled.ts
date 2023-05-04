import styled from "styled-components/native";
import { stylish } from "../lib/stylish";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: flex-start;
`;

// @TODO: remove
export const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;
