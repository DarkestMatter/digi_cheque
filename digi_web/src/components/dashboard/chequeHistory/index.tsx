import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ChequeHistoryData } from "./ChequeHistoryData";
import { ChequeHistoryHeader } from "./ChequeHistoryHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { NoHistoryMessage } from "./NoHistoryMessage";
import { getChequeHistoryRequest } from "../../../slices/CreateCheque";
import RestoreIcon from "@mui/icons-material/Restore";
import { getBankName } from "../../../utils/getBanckName";
import { maxWidth } from "@mui/system";

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
        <Grid>
          {chequeHistory.length > 0 ? (
            <>
              {chequeHistory.map((chequesDetails) => {
                return (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      style={{
                        boxShadow: "0px 0px 20px 0px #808c98",
                        minWidth: "300px",
                        marginTop: "20px",
                      }}
                      variant="elevation"
                    >
                      <CardContent>
                        <Typography>
                          Recipient Name: {chequesDetails.name}
                        </Typography>
                        <Typography>Amount: {chequesDetails.amount}</Typography>
                        <Typography>
                          Bank Name: {getBankName(chequesDetails.bankName)}
                        </Typography>
                        <Typography>
                          Dated:{" "}
                          {chequesDetails.chequeClearanceDate?.slice(0, 10)}
                        </Typography>
                        <Typography>
                          Cheque Status: {chequesDetails.chequeStatus}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
              {/* <TableContainer sx={{ maxHeight: 300 }} component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
                stickyHeader
              >
                <ChequeHistoryHeader />
                <ChequeHistoryData />
              </Table>
            </TableContainer> */}
            </>
          ) : (
            <NoHistoryMessage />
          )}
        </Grid>
      </Container>
    </>
  );
}
