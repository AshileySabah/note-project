import { ThemeProvider, createTheme } from "@mui/material/styles";
import Routes from "./pages/Routes";
import getDesignTokens from "./styles/Theme";
import MenuBar from "./components/MenuBar";
import useLocalState from "./storage/useLocalState";
import Background from "./components/Background";

const App = () => {
  const [mode, setMode] = useLocalState("noteTheme", "dark");
  const theme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={theme}>
      <Background theme={theme}>
        <MenuBar theme={theme} setMode={setMode} />
        <Routes />
      </Background>
    </ThemeProvider>
  );
};

export default App;
