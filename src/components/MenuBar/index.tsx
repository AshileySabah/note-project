import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import { pages, settings } from "./provider";
import useStyles from "./styles";

const MenuBar = ({ theme, setMode }: any) => {
  const toggleTheme = () => {
    setMode((prevMode: any) => (prevMode === "light" ? "dark" : "light"));
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const currentMode = theme.palette.mode;

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuMobile
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
          />

          <MenuDesktop pages={pages} handleCloseNavMenu={handleCloseNavMenu} />

          <Box className={classes.box}>
            <Tooltip title="Configurações da conta">
              <IconButton
                onClick={handleOpenUserMenu}
                className={classes.avatarButton}
              >
                <Avatar
                  className={classes.avatar}
                  alt="Ashiley"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              className={classes.menu}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <IconButton onClick={toggleTheme} className={classes.lightButton}>
            {currentMode === "dark" ? (
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
