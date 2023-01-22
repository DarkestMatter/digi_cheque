import { CreateChequePopup } from "./CreateChequePopup";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CreateCheckButton } from "./menus/CreateCheckButton";
import ChequeHistory from "./chequeHistory";
import { CreateChequeConfirmationPopUp } from "./confirmBankRedirection";
import { DashboardCarousel } from "./dashboardcarousel";
import { ChequePreviewModel } from "../chequePreview/ChequePreviewModel";

export const Dashboard = () => {
  return (
    <React.Fragment>
      <Container fixed>
        <DashboardCarousel />
        <Box sx={{ paddingTop: 6 }} />
        <CreateCheckButton />
      </Container>
      <ChequeHistory />
      <CreateChequePopup />
      <CreateChequeConfirmationPopUp />
      <ChequePreviewModel />
    </React.Fragment>
  );
};
