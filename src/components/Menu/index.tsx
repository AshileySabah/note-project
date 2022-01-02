import { Box, IconButton, PaletteMode } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Menu = ({ theme, setMode }: any) => {
  const toggleTheme = () => {
    setMode((prevMode: any) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      Modo {theme.palette.mode}
      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

export default Menu;
