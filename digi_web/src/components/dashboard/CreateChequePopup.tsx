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
  resetCreateChequeFormData,
  setShouldShowCheuqPreview,
  setShouldShowRedirectionPopUp,
  shouldShowCreateChequePopup as setShouldShowCreateChequePopup,
  updateChequeFormData,
} from "../../slices/CreateCheque";
import { RootState } from "../../store";
import { ChequeClearanceDate } from "./ChequeClearanceDate";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export const CreateChequePopup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shouldShowCreateChequePopup, createChequeIsInProgress } = useSelector(
    (state: RootState) => {
      const { shouldShowCreateChequePopup, createChequeIsInProgress } =
        state?.createCheque;
      return { shouldShowCreateChequePopup, createChequeIsInProgress };
    }
  );
  const handleCancel = () => {
    dispatch(setShouldShowCreateChequePopup(false));
    dispatch(resetCreateChequeFormData());
  };
  const handleUpdate = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      updateChequeFormData({ name: e.target.name, value: e.target.value })
    );
  };
  const { amount, name, mobileNumber, email, chequeClearanceDate, bankId } =
    useSelector((state: RootState) => state.createCheque.createChequeForm);
  const disableCreateCheckButton =
    !amount ||
    !name ||
    !mobileNumber ||
    !email ||
    !chequeClearanceDate ||
    !bankId;
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
            onInput={(e: any) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
            value={mobileNumber}
            onChange={(e) => handleUpdate(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            required
            value={email}
            onChange={(e) => handleUpdate(e)}
          />
          <Box sx={{ paddingTop: 2 }} />
          <BankList />
          <Box sx={{ paddingTop: 2 }} />
          <ChequeClearanceDate />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCancel()}>Cancel</Button>
          <Button
            disabled={disableCreateCheckButton}
            onClick={() => dispatch(setShouldShowCheuqPreview(true))}
          >
            Preview
          </Button>
          <Button
            disabled={disableCreateCheckButton}
            onClick={() => {
              dispatch(setShouldShowCreateChequePopup(false));
              dispatch(setShouldShowRedirectionPopUp(true));
            }}
          >
            Create Check
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
