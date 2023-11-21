import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "black" }} position="static">
        <Toolbar>
          <Typography
            color="black"
            variant="h4"
            component="div"
            sx={{ flexGrow: 10 }}
          >
            <img style={{ width: "1em" }} alt="Katanox" src={logo} />
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            style={{ color: "#3f51b5", backgroundColor: "black" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            variant="outlined"
            style={{
              color: "#3f51b5",
              backgroundColor: "white",
              margin: "1rem",
            }}
          >
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
