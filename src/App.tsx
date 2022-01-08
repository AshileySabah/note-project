import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Routes from "./pages/Routes";
import getDesignTokens from "./styles/Theme";
import MenuBar from "./components/MenuBar";
import Background from "./components/Background";
import AccessibilityContextProvider, {
  AccessibilityContext,
} from "./context/AccessibilityContext";

const App = () => {
  const { states } = React.useContext(AccessibilityContext);
  const theme = createTheme(getDesignTokens(states.mode));

  return (
    <AccessibilityContextProvider>
      <ThemeProvider theme={theme}>
        <Background>
          <MenuBar />
          <Routes />
        </Background>
      </ThemeProvider>
    </AccessibilityContextProvider>
  );
};

export default App;
