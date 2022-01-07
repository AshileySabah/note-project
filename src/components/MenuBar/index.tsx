import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import useStyles from "./styles";
import { AccessibilityContext } from "../../context/AccessibilityContext";

const MenuBar = () => {
  const classes = useStyles();

  const { states, setStates } = React.useContext(AccessibilityContext);

  const toggleMode = () => {
    const updatedMode = states.mode === "light" ? "dark" : "light";
    setStates.setMode(updatedMode);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuMobile />

          <MenuDesktop />

          <IconButton onClick={toggleMode} className={classes.lightButton}>
            {states.mode === "dark" ? (
              <LightbulbIcon />
            ) : (
              <LightbulbOutlinedIcon />
            )}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuBar;
