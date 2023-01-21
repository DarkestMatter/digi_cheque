import { Box, Grid, TextField } from "@mui/material";
import "./loginpage.css";
import { LoginDetails } from ".";
export const LoginPage = () => {
  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container xs={12}>
        <Grid xs={12} md={6}>
          <Grid xs={12} container justifyContent="center">
            <div className="login" style={{ marginLeft: -60 }}>
              Welcome to Digi Cheque
            </div>
          </Grid>
          <Grid xs={12} container justifyContent="center">
            <div className="eula">
              <ul>
                <li>Quicker clearance</li>
                <li>Work smarter and greener</li>
                <li>More secured than physical cheques</li>
                <li>No need to physically pickup or deposit</li>
                <li>No cheque book required</li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <Grid xs={12} md={6}>
          <Grid xs={12} container justifyContent="center">
            <div className="loginBox">
              <LoginDetails />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
