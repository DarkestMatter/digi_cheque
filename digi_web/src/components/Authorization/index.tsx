import React from "react";
import { Button, Grid, Card } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAuthorizeCheckRequest,
  resetStoreRequest,
  setComfirmationPopup,
} from "../../slices/CreateCheque";
import { RootState } from "../../store";
import { useNavigate, Link } from "react-router-dom";
import { getBankName } from "../../utils/getBanckName";
import { formatDate } from "../../utils/functions";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import ConfirmationPopup from "../Confirmation";
import { chequeStatus } from "../../interfaces/Cheque/CreateChequeRequest";
import { getAuthChequeDataSelector } from "../../selectors/getAuthChequeDataSelector";
import ChequePreview  from "../chequePreview/ChequePreview";

const Authorization: React.FC = () => {
  const { isRequestProcessing } = useSelector(
    (state: RootState) => state.createCheque
  );
  const { currentTransactionDetails, isCheckAuthorized } = useSelector(
    (state: RootState) => state.createCheque
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");

  const openPopup = () => {
    dispatch(setComfirmationPopup(true));
  };
  const auth = () => {
    dispatch(
      handleAuthorizeCheckRequest({
        navigate: navigate,
        chequeStatus: chequeStatus.Authorized,
      })
    );
  };
 
  const isAuthSuccess =
    currentTransactionDetails.chequeStatus === chequeStatus.Cancel;
  const getAuthChequeData = useSelector(getAuthChequeDataSelector);
  return (
    <>
    {
      !matches && (<ChequePreview
        shouldShow={true}
        payeName={getAuthChequeData.payeName}
        amount={getAuthChequeData.amount}
        acountNumber={getAuthChequeData.acountNumber}
        ifsccode={getAuthChequeData.ifsccode}
        bankAddreess={getAuthChequeData.bankAddreess}
        bankName={getAuthChequeData.bankName}
        fromName={getAuthChequeData.fromName}
        amountInWord={getAuthChequeData.amountInWord}
        chequeClearanceDate={getAuthChequeData.chequeClearanceDate}
        isAuth={true}
        handleClose = {()=>{}}
        
      />)
    }
      <div style={{ padding: "20px" }}>
        {matches && (
          <Grid
            container
            xs={12}
            direction="row"
            justifyContent="center"
            textAlign="center"
            style={{marginBottom:'10px'}}
          >
            <Grid item xs={12} textAlign="center">
                  <b>Cheque Details</b>
                </Grid>
            <Card
              style={{
                padding: "10px",
                width: matches ? "100%" : "50%",
                background: "#D3D3D3",
              }}
            >
              <Grid
                container
                xs={12}
                spacing={2}
                direction="row"
                justifyContent="center"
                textAlign="center"
              >
                <Grid item xs={12} textAlign="center">
                  <b>{getBankName(currentTransactionDetails.bankName)}</b>
                </Grid>
                <Grid item xs={3} textAlign="left">
                  Name
                </Grid>
                <Grid item xs={3}>
                  :
                </Grid>
                <Grid item xs={6} textAlign="left">
                  {getAuthChequeData.payeName}
                </Grid>
                <Grid item xs={3} textAlign="left">
                  Amount
                </Grid>
                <Grid item xs={3}>
                  :
                </Grid>
                <Grid item xs={6} textAlign="left">
                  {getAuthChequeData.amount}
                </Grid>
                <Grid item xs={3} textAlign="left">
                  Date
                </Grid>
                <Grid item xs={3}>
                  :
                </Grid>
                <Grid item xs={6} textAlign="left">
                  {getAuthChequeData.chequeClearanceDate}
                </Grid>
              </Grid>
            </Card>
          </Grid>
        )}
        <Grid
          container
          xs={12}
          direction="row"
          justifyContent="center"
          textAlign="center"
        >
          <Card
            style={{
              padding: "10px",
              width: matches ? "100%" : "50%",
            }}
          >
            <Grid item xs={12} spacing={5} style={{ marginBottom: "10px" }}>
              Click Authorize to digitally sign the cheque and send to recipient
            </Grid>
            <Grid item xs={12} spacing={5} style={{ marginBottom: "10px" }}>
              <Button
                variant="contained"
                onClick={openPopup}
                disabled={isRequestProcessing || isCheckAuthorized}
                color="error"
              >
                Cancel
              </Button>{" "}
              &nbsp;
              <Button
                variant="outlined"
                color="error"
                onClick={auth}
                disabled={isRequestProcessing || isCheckAuthorized}
              >
                Authorize
              </Button>
            </Grid>

            {isRequestProcessing && (
              <Grid item xs={12}>
                Please wait......
              </Grid>
            )}
            <Grid item xs={12}>
              {isCheckAuthorized && (
                <>
                  <Alert color={!isAuthSuccess ? "success" : "error"}>
                    {`Authorization ${
                      isAuthSuccess
                        ? "Cancelled Successfully"
                        : `successfull, a digitally signed cheque has been sent to ${currentTransactionDetails.name}`
                    }`}
                  </Alert>
                  &nbsp;
                </>
              )}
            </Grid>
            <Grid item xs={12}>
              {isCheckAuthorized && (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => {
                      dispatch(resetStoreRequest());
                    }}
                  >
                    Go To Dashboard
                  </Link>
                </>
              )}
            </Grid>
          </Card>
        </Grid>
      </div>
      <ConfirmationPopup navigate={navigate} />
    </>
  );
};
export default Authorization;
