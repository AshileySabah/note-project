import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Fragment } from "react";
import { pages } from "../provider";

const MenuDesktop = () => {
  return (
    <Fragment>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        Note
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page: any) => (
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            {page}
          </Button>
        ))}
      </Box>
    </Fragment>
  );
};

export default MenuDesktop;
