import { TableCell, TableHead, TableRow } from "@mui/material";

export const ChequeHistoryHeader = () => {
  return (
    <TableHead>
      <TableRow sx={{
        backgroundColor: "yellow",
      }}>
        <TableCell>Sr.</TableCell>
        <TableCell align="left">Name</TableCell>
        <TableCell align="left">Mobile Number</TableCell>
        <TableCell align="left">Email</TableCell>
        <TableCell align="left">Bank Name</TableCell>
        <TableCell align="left">Created Date</TableCell>
        <TableCell align="left">Updated Date</TableCell>
        <TableCell align="left">Transaction Id</TableCell>
        <TableCell align="left">Cheque Status</TableCell>
      </TableRow>
    </TableHead>
  );
};
