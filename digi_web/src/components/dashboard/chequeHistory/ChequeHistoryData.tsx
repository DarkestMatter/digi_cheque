import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { getBankName } from "../../../utils/getBanckName";
export const ChequeHistoryData = () => {
  const chequeHistory = useSelector(
    (state: RootState) => state.createCheque.chequeHistory
  );
  const getButtonColor = (
    chequeStatus?: string | null
  ):
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning" => {
    switch (true) {
      case chequeStatus === "Open":
        return "info";
      case chequeStatus === "Authorized":
        return "secondary";
      default:
        return "primary";
    }
  };
  return (
    <>
      <TableBody>
        {chequeHistory.map((chequesDetails, index) => {
          const buttonColor = getButtonColor(chequesDetails?.chequeStatus);
          return (
            <TableRow
              key={chequesDetails.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{chequesDetails.name}</TableCell>
              <TableCell align="left">{chequesDetails.mobileNo}</TableCell>
              <TableCell align="left">{chequesDetails.email}</TableCell>
              <TableCell align="left">
                {getBankName(chequesDetails?.bankName)}
              </TableCell>
              <TableCell align="left">{chequesDetails?.createdDate}</TableCell>
              <TableCell align="left">{chequesDetails?.updatedDate}</TableCell>
              <TableCell align="left">
                {chequesDetails?.transactionId}
              </TableCell>
              <TableCell align="left">
                <Button color={buttonColor}>
                  {chequesDetails?.chequeStatus}
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </>
  );
};
