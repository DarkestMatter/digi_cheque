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
import { getBankName } from "../../utils/getBanckName";
import Alert from "@mui/material/Alert";

export const CreateChequeConfirmationPopUp: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shouldShowRedirectionPopUp } = useSelector((state: RootState) => {
    const { shouldShowRedirectionPopUp } = state?.createCheque;
    return { shouldShowRedirectionPopUp };
  });
  const handleCancel = () => {
    dispatch(setShouldShowCreateChequePopup(true));
    dispatch(setShouldShowRedirectionPopUp(false));
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
      <Dialog open={shouldShowRedirectionPopUp} onClose={() => {}}>
        <DialogContent>
          <Alert severity="warning">
            {` You will be redirected to ${getBankName(
              bankId
            )} for further processing , Please use
          your Internet banking credentials to login to bank portal`}
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={disableCreateCheckButton}
            onClick={() => dispatch(handleCreateChequeRequest({ navigate }))}
          >
            OK
          </Button>
          <Button onClick={() => handleCancel()}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
