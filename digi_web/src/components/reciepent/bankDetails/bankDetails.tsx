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
import React from "react";
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
const BankDetails = () => {
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
  const btnstyle = { width: 100, margin: "50px 150px" };
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
        <Grid alignItems={"center"}>
          <Avatar style={avatarStyle}>
            {/* <AddCircleOutlineOutlinedIcon /> */}
          </Avatar>
          <h2 style={headerStyle}>{email}</h2>
        </Grid>
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
          {/* <TextField
            fullWidth
            autoFocus
            variant="standard"
            required
            label="Email Address"
            placeholder="Email Address"
            margin="dense"
            value={email}
            onChange={(e) => handleUpdate(e)}
            name="email"
            type="email"
          />
          <TextField
            fullWidth
            autoFocus
            variant="standard"
            required
            label="Phone Number"
            placeholder="Enter your phone number"
            margin="dense"
            value={phoneNumber}
            onChange={(e) => handleUpdate(e)}
            name="phoneNumber"
            type="number"
          /> */}
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          centerRipple
          style={btnstyle}
          disabled={isSubmitButtonDisable}
          onClick={() => dispatch(handleBankDetailsRequest({ navigate }))}
        >
          Submit
        </Button>
      </Paper>
    </Grid>
  );
};

export default BankDetails;
