import { CreateChequePopup } from "./CreateChequePopup";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CreateCheckButton } from "./menus/CreateCheckButton";
import ChequeHistory from "./chequeHistory";
import { ChequePreview } from "../chequePreview/Cheque";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getChquePreviewDataSelectore } from "../../selectors/getChquePreviewDataSelectore";
import { CreateChequeConfirmationPopUp } from "./confirmBankRedirection";

export default function Dashboard() {
  const shouldShowCheuqPreview = useSelector(
    (state: RootState) => state.createCheque.shouldShowCheuqPreview
  );
  const chequePreviewValue = useSelector(getChquePreviewDataSelectore);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ paddingTop: 6 }} />
        <CreateCheckButton />
      </Container>
      <ChequeHistory />
      <CreateChequePopup />
      <CreateChequeConfirmationPopUp />
      <ChequePreview
        shouldShow={shouldShowCheuqPreview}
        payeName={chequePreviewValue.payeName}
        amount={chequePreviewValue.amount}
        acountNumber={chequePreviewValue.acountNumber}
        ifsccode={chequePreviewValue.ifsccode}
        bankAddreess={chequePreviewValue.bankAddreess}
        bankName={chequePreviewValue.bankName}
        fromName={chequePreviewValue.fromName}
        amountInWord={chequePreviewValue.amountInWord}
        chequeClearanceDate={chequePreviewValue.chequeClearanceDate}
      />
    </React.Fragment>
  );
}
