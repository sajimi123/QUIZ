import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6f4e37",
    },
    background: {
      default: "#f5e6d3",
      paper: "#fff8ef",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d7a86e",
    },
    background: {
      default: "#1c1410",
      paper: "#2b1d16",
    },
  },
});