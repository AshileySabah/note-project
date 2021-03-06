import React from "react";
import { Paper } from "@mui/material";
import { AccessibilityContext } from "../../context/AccessibilityContext";

const Background = ({ children }: any) => {
  const { states } = React.useContext(AccessibilityContext);

  const style =
    states.mode === "light"
      ? "linear-gradient(50deg, rgba(74,11,168,1) 0%, rgba(118,68,193,1) 24%, rgba(255,93,178,1) 66%, rgba(249,176,214,1) 100%)"
      : "#121212";

  return (
    <Paper
      sx={{
        background: style,
        borderRadius: "0",
        minHeight: "100vh",
      }}
    >
      {children}
    </Paper>
  );
};

export default Background;
