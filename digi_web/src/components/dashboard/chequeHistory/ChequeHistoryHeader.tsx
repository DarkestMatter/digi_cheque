import { TableCell, TableHead, TableRow } from "@mui/material";

export const ChequeHistoryHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Sr.</TableCell>
        <TableCell align="right">Name</TableCell>
        <TableCell align="right">Mobile Number</TableCell>
        <TableCell align="right">Email</TableCell>
        <TableCell align="right">Bank Name</TableCell>
        <TableCell align="right">Created Date</TableCell>
        <TableCell align="right">Updated Date</TableCell>
        <TableCell align="right">Transaction Id</TableCell>
        <TableCell align="right">Cheque Status</TableCell>
      </TableRow>
    </TableHead>
  );
};
