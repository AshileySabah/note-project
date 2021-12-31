import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#F376D3",
            light: "#F694DD",
            dark: "#F353CA",
            contrastText: "#fff",
          },
          secondary: {
            main: "#2C319F",
            light: "#9093F0",
            dark: "#0C0F60",
            contrastText: "#fff",
          },
        }
      : {
          primary: {
            main: "#48496E",
            light: "#48496E",
            dark: "#48496E",
            contrastText: "#fff",
          },
          secondary: {
            main: "#48496E",
            light: "#48496E",
            dark: "#48496E",
            contrastText: "#fff",
          },
        }),
  },
});

export default getDesignTokens;
