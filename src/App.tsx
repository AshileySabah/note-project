import { ThemeProvider, createTheme } from "@mui/material/styles";
import Routes from "./pages/Routes";
import getDesignTokens from "./styles/Theme";
import Menu from "./components/Menu";
import useLocalState from "./storage/useLocalState";

const App = () => {
  const [mode, setMode] = useLocalState("noteTheme", "dark");
  const theme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={theme}>
      <Menu theme={theme} setMode={setMode} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
