import React from "react";
import { PaletteMode } from "@mui/material";
import useLocalState from "../../storage/useLocalState";

const inicialAccessibilityContext = {
  states: {
    mode: "light",
    fontSize: 16,
  },
  setStates: {
    setMode: (mode: PaletteMode) => {},
    setFontSize: (fontSize: number) => {},
  },
};

export const AccessibilityContext = React.createContext(
  inicialAccessibilityContext
);

const AccessibilityContextProvider = ({ children }: any) => {
  const [mode, setMode] = useLocalState(
    "noteModeTheme",
    inicialAccessibilityContext.states.mode
  );
  const [fontSize, setFontSize] = useLocalState(
    "noteFontSizeTheme",
    inicialAccessibilityContext.states.fontSize
  );

  const AccessibilityContextValue = {
    states: {
      mode: mode,
      fontSize: fontSize,
    },
    setStates: {
      setMode: setMode,
      setFontSize: setFontSize,
    },
  };

  return (
    <AccessibilityContext.Provider value={AccessibilityContextValue}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityContextProvider;
