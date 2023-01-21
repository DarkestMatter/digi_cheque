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
  return (
    <Grid container xs={12} justifyContent="center">
      <Grid container xs={12} justifyContent="center">
        <Typography variant="h5" noWrap>
          {getBankName(currentTransactionDetails.bankName)}
        </Typography>
      </Grid>
      <FormControl style={{ width: "50%" }}>
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
        <TextField
          autoFocus
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
        <Grid item xs={12}>
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
            marginTop: "10px",
          }}
        >
          Login
        </Button>
      </FormControl>
    </Grid>
  );
};
