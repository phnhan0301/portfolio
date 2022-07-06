import { createTheme, ThemeOptions } from "@mui/material/styles";
import baseThemeOptions from "./baseThemeOptions";

const lightThemeOptions: ThemeOptions = {
  ...baseThemeOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#58A6FF",
    },
    secondary: {
      main: "#F1C40F",
    },
    text: {
      primary: "#2c3e50",
    },
  },
};

export default createTheme(lightThemeOptions);
