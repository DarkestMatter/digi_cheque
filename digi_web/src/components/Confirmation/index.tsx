import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { handleAuthorizeCheckRequest, setComfirmationPopup } from "../../slices/CreateCheque";
import { chequeStatus } from "../../interfaces/Cheque/CreateChequeRequest";

interface IAlert {
    funcCall?(): void;
    navigate : any
}

const ConfirmationPopup = (props: IAlert) => {
  const dispatch = useDispatch();
  console.log(props)
  const { isOpenConfirmationPopup } = useSelector(
    (state: RootState) => state.createCheque
  );

  const handleClickYes = () => {
    dispatch(
        handleAuthorizeCheckRequest({
          navigate: props.navigate,
          chequeStatus: chequeStatus.Cancel,
        })
      );
      dispatch(setComfirmationPopup(false));
  };

  const handleCloseNo = () => {
    dispatch(setComfirmationPopup(false));
  };
  return (
    <div>
      <Dialog
        open={isOpenConfirmationPopup}
        onClose={handleCloseNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to cancel?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNo}>No</Button>
          <Button onClick={handleClickYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ConfirmationPopup;
