import { Alert, FormControl, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUserInput } from "../../../interfaces/login/IUserInput";
import { getUserInput } from "../../../selectors/selectors";
import {
  updateForm,
  handleBankLogin,
} from "../../../slices/userDetail/userSlice";
import { RootState } from "../../../store";
import { getBankName } from "../../../utils/getBanckName";

export const BankLogin: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bankLoginUserName = useSelector(getUserInput).bankLoginUserName;
  const bankLoginPassword = useSelector(getUserInput).bankLoginPassword;
  const isLoginFailed = useSelector(getUserInput).bankLoginStatus === "failed";
  const { currentTransactionDetails } = useSelector(
    (state: RootState) => state.createCheque
  );
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    const formObj: IUserInput = {};
    //@ts-ignore
    formObj[name as keyof IUserInput] = e.target?.value;
    dispatch(updateForm(formObj));
  };
  const paperStyle = {
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 40%)",
    color: "#f1f1f2",
    position: "relative",
    width: "400px",
    paddingTop: "30px",
    paddingBottom: "30px",
    borderRadius: 5,
  };
  return (
    <Grid xs={12} container justifyContent="center">
      <div style={paperStyle}>
        <Grid container xs={12}>
          <Grid
            container
            xs={12}
            justifyContent="center"
            sx={{ marginBottom: 3, color: "#5b5353" }}
          >
            <Typography variant="h5" noWrap>
              {getBankName(currentTransactionDetails.bankName)}
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <TextField
              id="bankUserName"
              value={bankLoginUserName}
              variant="outlined"
              size="small"
              label="UserName"
              margin="dense"
              autoFocus
              required
              onChange={(e) => handleInputChange(e, "bankLoginUserName")}
            />
          </Grid>
          <Grid container justifyContent="center">
            <TextField
              id="bankPassword"
              required
              variant="outlined"
              size="small"
              label="Password"
              type="password"
              margin="dense"
              value={bankLoginPassword}
              onChange={(e) => handleInputChange(e, "bankLoginPassword")}
            />
          </Grid>
          <Grid container justifyContent="center">
            {isLoginFailed && (
              <Alert severity="error">Invalid Username password</Alert>
            )}
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(handleBankLogin({ navigate }));
            }}
            style={{
              width: "25%",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "25px",
            }}
          >
            Login
          </Button>
        </Grid>
      </div>
    </Grid>
  );
};
