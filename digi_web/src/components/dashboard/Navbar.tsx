import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { CreateCheckButton } from "./menus/CreateCheckButton";
import { Notifications } from "./menus/Notifications";
import { AccountIcon } from "./menus/AccountIcon";
import { Title } from "./menus/Title";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Title />
          <Box sx={{ flexGrow: 1 }} />
          <CreateCheckButton />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Notifications />
            <AccountIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
