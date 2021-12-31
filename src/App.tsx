import { PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Routes from "./pages/Routes";
import getDesignTokens from "./styles/Theme";
import Menu from "./components/Menu";

const App = () => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={theme}>
      <Menu theme={theme} setMode={setMode} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
