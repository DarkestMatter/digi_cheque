import { Grid, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
const OtpVerificationSuccessfull = () => {
  const { userName, phoneNumber, accountNumber, IFSCCode, email } = useSelector(
    (state: RootState) => state.reciepent.bankDetails
  );

  const paperStyle = {
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 40%)",
    color: "#f1f1f2",
    position: "relative",
    width: "400px",
    paddingTop: "30px",
    paddingBottom: "30px",
    borderRadius: 5,
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
    "margin-bottom": "50px",
    marginBottom: 30,
  };

  const heading2 = {
    marginTop: "10px",
    color: "black",
    "font-size": "15px",
    "margin-top": "10px",
    marginLeft: 15,
    marginRight: 15,
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
    height: "100px",
    width: "100px",
    marginBottom: 30,
  };

  return (
    <Grid xs={12}>
      <Grid xs={12} container justifyContent="center">
        <div style={paperStyle}>
          <Grid xs={12}>
            <Grid xs={12} container justifyContent="center">
              <img src="./src/assets/suc.png" style={logo} />
            </Grid>

            <Grid xs={12} style={heading1} container justifyContent="center">
              Verified OTP...
            </Grid>

            <Grid xs={12} style={heading2} container justifyContent="center">
              Hey, {userName}
            </Grid>

            <Grid xs={12} style={heading2} container justifyContent="center">
              we’d like to inform you that we have verified your email *********
              {email}.
            </Grid>

            <Grid xs={12} style={heading2} alignItems={"center"}>
              This is a confirmation message that we’ve received your payment
              request we are initiating your transaction shortly.
            </Grid>

            <Grid xs={12} style={heading2} alignItems={"center"}>
              See what’s next at https://digicheque.com. Thank you for working
              with us.
            </Grid>

            <Grid xs={12} style={heading3} container justifyContent="center">
              Thank you for working with us.
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default OtpVerificationSuccessfull;
