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
const OtpVerificationSuccessfull = () => {
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
    color: "#32ba7c",
    "font-size": "35px",
    "margin-top": "-220px",
    "margin-bottom": "50px",
  };

  const heading2 = {
    marginTop: "10px",
    color: "black",
    "font-size": "15px",
    "margin-top": "10px",
  };
  const heading3 = {
    color: "black",
    "font-size": "15px",
    "margin-top": "30px",
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
    "margin-left": "850px",
    "margin-top": "50px",
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid alignItems={"center"}>
          <img src="./src/assets/suc.png" style={logo} />
        </Grid>

        <Grid style={heading1} alignItems={"center"}>
          Verified OTP...
        </Grid>

        <Grid style={heading2} alignItems={"center"}>
          Hey, Sachin
        </Grid>

        <Grid style={heading2} alignItems={"center"}>
          we’d like to inform you that we have verified your email
          *********325@gmail.com.
        </Grid>

        <Grid style={heading2} alignItems={"center"}>
          This is a confirmation message that we’ve received your payment
          request we are initiating your transaction shortly.
        </Grid>

        <Grid style={heading2} alignItems={"center"}>
          See what’s next at https://digicheque.com. Thank you for working with
          us.
        </Grid>

        <Grid style={heading3} alignItems={"center"}>
          Thank you for working with us.
        </Grid>
      </Paper>
    </Grid>
  );
};

export default OtpVerificationSuccessfull;
