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
import { RootState } from "../../../store";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleVerifyOtpRequest,
  updateOtpData,
} from "../../../slices/reciepent";
const VerifyOtp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paperStyle = {
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 40%)",
    color: "#f1f1f2",
    position: "relative",
    width: "400px",
    paddingTop: "30px",
    paddingBottom: "30px",
  };
  const headerStyle = { margin: "20px 130px", color: "#5b5353" };
  const btnstyle = { width: 100, margin: "40px 150px" };
  const logo = { height: "59px", width: "73px" };
  const { otp } = useSelector(
    (state: RootState) => state.reciepent.otpVerification
  );
  const handleUpdate = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(updateOtpData({ name: e.target.name, value: e.target.value }));
  };
  return (
    <Grid xs={12}>
      <Grid xs={12} container justifyContent="center">
        <div style={paperStyle}>
          <Grid container xs={12}>
            <Grid xs={12}>
              <Grid container justifyContent="center">
                <img src="./src/assets/otp.png" style={logo} />
                <h2 style={headerStyle}>Verify OTP</h2>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} container>
            <Grid xs={12}>
              <Grid container justifyContent="center">
                <TextField
                  autoFocus
                  variant="standard"
                  required
                  label="OTP"
                  placeholder="Enter your OTP"
                  margin="dense"
                  onChange={(e) => handleUpdate(e)}
                  name="otp"
                  type="number"
                  value={otp}
                  sx={{ minWidth: 300 }}
                />
              </Grid>
            </Grid>
            <Grid container xs={12} sx={{ marginLeft: 5 }}>
              <Button>resend</Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            centerRipple
            style={btnstyle}
            onClick={() => dispatch(handleVerifyOtpRequest({ navigate }))}
          >
            Submit
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default VerifyOtp;
