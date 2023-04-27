import "styled-components/native";

import colors from "../themes/colors";
import fonts from "../themes/fonts";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
  }
}
