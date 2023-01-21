import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getChequeDetailsRequest,
  handleBankDetailsRequest,
  updateBankFormData,
} from "../../../slices/reciepent";
import { RootState } from "../../../store";
import { ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import QRCode from "react-qr-code";
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
    "border-radius": "10px",
    padding: 50,
    width: 400,
    margin: "0 auto",
    height: 370,
    "box-shadow": "0px 0px 20px 0px #808c98",
  };
  const headerStyle = { margin: "20px 100px" };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
    margin: "0px 160px",
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
    <Grid>
      <Paper style={paperStyle}>
        {isSubmitChequeOnline ? (
          <Grid container xs={12}>
            <Grid xs={12} alignItems={"center"}>
              <Avatar style={avatarStyle}>
                {/* <AddCircleOutlineOutlinedIcon /> */}
              </Avatar>
              <h2 style={headerStyle}>{email}</h2>
            </Grid>
            <Grid xs={12}>
              <form>
                <TextField
                  fullWidth
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
                />
                <TextField
                  fullWidth
                  autoFocus
                  variant="standard"
                  required
                  label="Account Number"
                  placeholder="Enter your Account number"
                  margin="dense"
                  value={accountNumber}
                  onChange={(e) => handleUpdate(e)}
                  name="accountNumber"
                  type="number"
                />
                <TextField
                  fullWidth
                  autoFocus
                  variant="standard"
                  required
                  label="IFSC Code"
                  placeholder="Enter your IFSC Code"
                  margin="dense"
                  value={IFSCCode}
                  onChange={(e) => handleUpdate(e)}
                  name="IFSCCode"
                  type="text"
                />
              </form>
            </Grid>
            <Grid xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: 20 }}
                disabled={isSubmitButtonDisable}
                onClick={() => dispatch(handleBankDetailsRequest({ navigate }))}
              >
                Submit
              </Button>
              <Button
                style={{ marginTop: 20, marginLeft: 15 }}
                onClick={() => setiIsSubmitChequeOnline(!isSubmitChequeOnline)}
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
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={transId}
                  viewBox={`0 0 256 256`}
                />
              </Grid>
            )}
          </Grid>
        )}
        <Grid container xs={12}>
          {!isSubmitChequeOnline && (
            <Grid xs={12} style={{ marginTop: 20 }}>
              <Grid xs={12} textAlign="center">
                Show this QR code at Bank and submit your Cheque
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
                  Accept Cheque Online
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default BankDetails;
