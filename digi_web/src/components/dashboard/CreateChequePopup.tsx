import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { BankList } from "./BankList";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCreateChequeRequest,
  shouldShowCreateChequePopup as setShouldShowCreateChequePopup,
  updateChequeFormData,
} from "../../slices/CreateCheque";
import { RootState } from "../../store";
import { ChequeClearanceDate } from "./ChequeClearanceDate";
import { ChangeEvent } from "react";
import { Loader } from "../Loader";

export const CreateChequePopup = () => {
  const dispatch = useDispatch();
  const { shouldShowCreateChequePopup, createChequeIsInProgress } = useSelector(
    (state: RootState) => {
      const { shouldShowCreateChequePopup, createChequeIsInProgress } =
        state?.createCheque;
      return { shouldShowCreateChequePopup, createChequeIsInProgress };
    }
  );
  const handleUpdate = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      updateChequeFormData({ name: e.target.name, value: e.target.value })
    );
  };
  const { amount, name, mobileNumber } = useSelector(
    (state: RootState) => state.createCheque.createChequeForm
  );
  return (
    <>
      <Dialog open={shouldShowCreateChequePopup} onClose={() => {}}>
        <DialogTitle>Write Cheque</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill below infomation to write check
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="amount"
            id="name"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            required
            value={amount}
            onChange={(e) => handleUpdate(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            required
            value={name}
            onChange={(e) => handleUpdate(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            name="mobileNumber"
            id="name"
            label="Mobile Number"
            type="number"
            fullWidth
            variant="standard"
            required
            value={mobileNumber}
            onChange={(e) => handleUpdate(e)}
          />
          <Box sx={{ paddingTop: 2 }} />
          <BankList />
          <Box sx={{ paddingTop: 2 }} />
          <ChequeClearanceDate />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => dispatch(setShouldShowCreateChequePopup(false))}
          >
            Cancel
          </Button>
          <Button onClick={() => dispatch(handleCreateChequeRequest())}>
            Create Check
          </Button>
        </DialogActions>
        {/* {createChequeIsInProgress && <Loader />} */}
      </Dialog>
    </>
  );
};
