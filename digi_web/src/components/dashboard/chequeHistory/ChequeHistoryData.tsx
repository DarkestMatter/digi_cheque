import { TableBody, TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { getBankName } from "../../../utils/getBanckName";
export const ChequeHistoryData = () => {
  const chequeHistory = useSelector(
    (state: RootState) => state.createCheque.chequeHistory
  );
  return (
    <>
      <TableBody>
        {chequeHistory.map((chequesDetails, index) => (
          <TableRow
            key={chequesDetails.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align="right">{chequesDetails.name}</TableCell>
            <TableCell align="right">{chequesDetails.mobileNo}</TableCell>
            <TableCell align="right">{chequesDetails.email}</TableCell>
            <TableCell align="right">{getBankName(chequesDetails?.bankName)}</TableCell>
            <TableCell align="right">{chequesDetails?.createdDate}</TableCell>
            <TableCell align="right">{chequesDetails?.updatedDate}</TableCell>
            <TableCell align="right">{chequesDetails?.transactionId}</TableCell>
            <TableCell align="right">{chequesDetails?.chequeStatus}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};
