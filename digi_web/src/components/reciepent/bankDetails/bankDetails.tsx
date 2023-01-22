import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { width } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getChequeDetailsRequest,
  handleBankDetailsRequest,
  updateBankFormData,
} from "../../../slices/reciepent";
import { RootState } from "../../../store";
const BankDetails = () => {
  const [isSubmitChequeOnline, setiIsSubmitChequeOnline] =
    useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { transId } = useParams();
  useEffect(() => {
    dispatch(getChequeDetailsRequest({ transId: transId }));
  }, []);

  const paperStyle = {
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 40%)",
    color: "#f1f1f2",
    position: "relative",
    width: "400px",
    paddingTop: "30px",
    paddingBottom: "30px",
    borderRadius: 5,
  };
  const headerStyle = { margin: "20px 100px", color: "#5b5353" };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
    height: 70,
    width: 70,
  };
  const { userName, phoneNumber, accountNumber, IFSCCode, email } = useSelector(
    (state: RootState) => state.reciepent.bankDetails
  );
  const handleUpdate = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      updateBankFormData({ name: e.target.name, value: e.target.value })
    );
  };
  let isSubmitButtonDisable = true;
  if (userName && accountNumber && IFSCCode) {
    isSubmitButtonDisable = false;
  }
  return (
    <Grid container xs={12} className="loginPageTopPadding">
      <Grid xs={12}>
        <Grid xs={12} container justifyContent="center">
          <div style={paperStyle}>
            {isSubmitChequeOnline ? (
              <Grid container xs={12}>
                <Grid xs={12}>
                  <Grid container justifyContent="center">
                    <Avatar style={avatarStyle}></Avatar>
                    <h2 style={headerStyle}>{email}</h2>
                  </Grid>
                </Grid>
                <Grid xs={12} container>
                  <Grid xs={12}>
                    <Grid container justifyContent="center">
                      <TextField
                        autoFocus
                        variant="standard"
                        required
                        label="Bank Holder Name"
                        placeholder="Enter Bank Holder Name"
                        margin="dense"
                        value={userName}
                        onChange={(e) => handleUpdate(e)}
                        name="userName"
                        type="text"
                        sx={{ minWidth: 300 }}
                      />
                    </Grid>
                    <Grid container justifyContent="center">
                      <TextField
                        variant="standard"
                        required
                        label="Account Number"
                        placeholder="Enter your Account number"
                        margin="dense"
                        value={accountNumber}
                        onChange={(e) => handleUpdate(e)}
                        name="accountNumber"
                        type="number"
                        sx={{ minWidth: 300 }}
                      />
                    </Grid>
                    <Grid container justifyContent="center">
                      <TextField
                        variant="standard"
                        required
                        label="IFSC Code"
                        placeholder="Enter your IFSC Code"
                        margin="dense"
                        value={IFSCCode}
                        onChange={(e) => handleUpdate(e)}
                        name="IFSCCode"
                        type="text"
                        sx={{ minWidth: 300 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12} textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 20 }}
                    disabled={isSubmitButtonDisable}
                    onClick={() =>
                      dispatch(handleBankDetailsRequest({ navigate }))
                    }
                  >
                    Submit
                  </Button>
                  <Button
                    style={{ marginTop: 20, marginLeft: 15 }}
                    onClick={() =>
                      setiIsSubmitChequeOnline(!isSubmitChequeOnline)
                    }
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Grid container xs={12}>
                {transId && (
                  <Grid
                    xs={12}
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: 200,
                      width: "100%",
                    }}
                  >
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={transId}
                      viewBox={`0 0 256 256`}
                    />
                  </Grid>
                )}
              </Grid>
            )}
            <Grid container xs={12}>
              {!isSubmitChequeOnline && (
                <Grid
                  xs={12}
                  style={{
                    marginTop: 20,
                    color: "#5b5353",
                    marginLeft: 15,
                    marginRight: 15,
                  }}
                >
                  <Grid xs={12} textAlign="center">
                    Show QR code at your Bank to submit this Cheque
                  </Grid>
                  <Grid xs={12} textAlign="center" sx={{ marginTop: 2 }}>
                    OR
                  </Grid>
                  <Grid xs={12} textAlign="center" sx={{ marginTop: 3 }}>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        setiIsSubmitChequeOnline(!isSubmitChequeOnline)
                      }
                    >
                      Submit Cheque Online
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BankDetails;
