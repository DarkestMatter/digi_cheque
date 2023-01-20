import { CreateChequePopup } from "./CreateChequePopup";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CreateCheckButton } from "./menus/CreateCheckButton";

export default function Dashboard() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
       <Box sx={{ paddingTop: 6 }} />
        <CreateCheckButton/>
      </Container>
      <CreateChequePopup />
    </React.Fragment>
  );
}
