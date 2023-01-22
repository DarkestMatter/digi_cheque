import { Avatar, Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getChequeDetailsRequest,
  handleBankDetailsRequest,
  updateBankFormData,
} from "../../../slices/reciepent";
import { RootState } from "../../../store";
import { QrCode } from "./QrCode";
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
              <QrCode />
            )}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BankDetails;
