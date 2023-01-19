import {
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
import { shouldShowCreateCheckPopup } from "../../slices/CreateCheque";
import { RootState } from "../../store";

export const CreateChequePopup = () => {
  const dispatch = useDispatch();
  const shouldShowPopup = useSelector(
    (state: RootState) => state?.createCheque.shouldShowCreateChequePopup
  );
  return (
    <Dialog open={shouldShowPopup} onClose={() => {}}>
      <DialogTitle>Write Cheque</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill below infomation to write check
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Amount"
          type="number"
          fullWidth
          variant="standard"
          required
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          required
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Mobile Number"
          type="number"
          fullWidth
          variant="standard"
          required
        />
        <BankList />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(shouldShowCreateCheckPopup(false))}>
          Cancel
        </Button>
        <Button onClick={() => {}}>Create Check</Button>
      </DialogActions>
    </Dialog>
  );
};
