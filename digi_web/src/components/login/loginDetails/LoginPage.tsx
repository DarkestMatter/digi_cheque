import { Box, TextField } from "@mui/material";
import "./loginpage.css";
import { LoginDetails } from ".";
export const LoginPage = () => {
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="left">
            <div className="login">Welcome to Digi Cheque</div>
            <div className="eula">
              <ul>
                <li>Quicker clearance</li>
                <li>Work smarter and greener</li>
                <li>More secured than physical cheques</li>
                <li>No need to physically pickup or deposit</li>
                <li>No cheque book required</li>
              </ul>
            </div>
          </div>
          <div className="right" style={{ padding: "30px" }}>
            <Box sx={{ paddingTop: 3 }} />
            <LoginDetails />
          </div>
        </div>
      </div>
    </>
  );
};
