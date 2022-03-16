import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  blue: "#0095f6",
};

export const navigationTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: "black",
  },
};
