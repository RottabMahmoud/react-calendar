import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import logo from "../logos/logo.svg";

import HomeIcon from "@mui/icons-material/Home";
import { Assignment } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "black" }} position="static">
        <Toolbar>
          <Typography
            color="black"
            variant="h4"
            component="div"
            sx={{ flexGrow: 20 }}
          >
            {" "}
            <img
              style={{
                width: "1em",
                backgroundColor: "white",
                borderRadius: "100%",
              }}
              alt="Mahmoud Rottab"
              src={logo}
            />
          </Typography>
          <Tooltip
            component={Link}
            to="/"
            style={{ color: "white" }}
            title="Home"
          >
            <IconButton>
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            component={Link}
            to="/about"
            style={{ color: "white" }}
            title="About"
          >
            <IconButton>
              <Assignment />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
