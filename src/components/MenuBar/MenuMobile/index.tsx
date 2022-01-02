import { Typography, Box, IconButton, MenuItem, Menu } from "@mui/material";
import { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MenuMobile = ({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
  pages,
}: any) => {
  return (
    <Fragment>
      <Typography
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontSize: "3em",
          fontWeight: "bold",
        }}
      >
        Note
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page: any) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>{" "}
    </Fragment>
  );
};

export default MenuMobile;
