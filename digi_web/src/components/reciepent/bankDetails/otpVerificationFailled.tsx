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
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
const OtpVerificationFailled = () => {
  const { userName, phoneNumber, accountNumber, IFSCCode, email } = useSelector(
    (state: RootState) => state.reciepent.bankDetails
  );

  const paperStyle = {
    "border-radius": "10px",
    margin: "10px 0px 0px 30px",
    width: "90%",
    padding: 30,
    "background-color": "white",
    height: 300,
    "box-shadow": "0px 0px 20px 0px #808c98",
  };
  const headerStyle = { margin: "47px 66px 43px", color: "red" };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
    margin: "0px 160px",
    height: 70,
    width: 70,
  };
  const marginTop = { marginTop: 5 };

  const btnstyle = { width: 100, margin: "40px 150px" };
  const successStyle = { width: 100, margin: "40px 150px" };

  const heading1 = {
    color: "#f15249",
    "font-size": "35px",
    "margin-top": "50px",
  };

  const heading2 = {
    marginTop: "30px",
    color: "black",
    "font-size": "20px",
    "margin-top": "40px",
  };
  const heading3 = {
    marginTop: "30px",
    color: "red",
    "font-size": "14px",
    fontStyle: "italic",
  };

  const bgstyles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      height: 569,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: `calc(100vw + -32px)`,
      margin: -24,
      padding: 24,
    },
  };

  const inputTextBox = { height: 15 };

  const logo = {
    height: "200px",
    width: "200px",
    "margin-left": "800px",
    "margin-top": "-120px",
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid style={heading1} alignItems={"center"}>
          Unable to verify OTP sorry..
        </Grid>
        <Grid style={heading2} alignItems={"center"}>
          We couldn't verify the email *********{email}
        </Grid>

        <Grid alignItems={"center"}>
          <img src="./src/assets/fail.png" style={logo} />
        </Grid>

        <Grid style={heading3} alignItems={"center"}>
          Note - Please check your details again and try to verify it.
        </Grid>
      </Paper>
    </Grid>
  );
};

export default OtpVerificationFailled;
