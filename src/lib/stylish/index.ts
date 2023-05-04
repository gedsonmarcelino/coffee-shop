import styled from "styled-components/native";
import { stylish } from "./stylish";

export const Text = styled.Text.attrs((props: any) => ({
  styles: props.styles,
}))`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.white};
  ${(props) => stylish(props)}
`;

export const View = styled.View.attrs((props: any) => ({
  styles: props.styles,
}))`
  ${(props) => stylish(props)}
`;

export const Row = styled.View.attrs((props: any) => ({
  styles: props.styles,
}))`
  flex-direction: row;
  ${(props) => stylish(props)}
`;

export const Col = styled.View.attrs((props: any) => ({
  styles: props.styles,
}))`
  flex-direction: column;
  ${(props) => stylish(props)}
`;

export const Image = styled.Image.attrs((props: any) => ({
  styles: props.styles,
}))`
  ${(props) => stylish(props)}
`;

export const Button = styled.TouchableOpacity.attrs((props: any) => ({
  styles: props.styles,
}))`
  ${(props) => stylish(props)}
`;
