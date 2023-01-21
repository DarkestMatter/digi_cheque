import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Box, Button, Container } from "@mui/material";
import { ChequeHistoryData } from "./ChequeHistoryData";
import { ChequeHistoryHeader } from "./ChequeHistoryHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { NoHistoryMessage } from "./NoHistoryMessage";
import { getChequeHistoryRequest } from "../../../slices/CreateCheque";
import RestoreIcon from "@mui/icons-material/Restore";

export default function ChequeHistory() {
  const chequeHistory = useSelector(
    (state: RootState) => state.createCheque.chequeHistory
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getChequeHistoryRequest());
  }, []);
  return (
    <>
      <Box sx={{ paddingTop: 6 }} />
      <Container maxWidth="lg">
        <Button
          variant="text"
          startIcon={<RestoreIcon />}
          onClick={() => dispatch(getChequeHistoryRequest())}
        >
          Cheque History
        </Button>
        <Box sx={{ paddingTop: 4 }} />
        {chequeHistory.length > 0 ? (
          <>
            <TableContainer sx={{ maxHeight: 300 }} component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
                stickyHeader
              >
                <ChequeHistoryHeader />
                <ChequeHistoryData />
              </Table>
            </TableContainer>
          </>
        ) : (
          <NoHistoryMessage />
        )}
      </Container>
    </>
  );
}
