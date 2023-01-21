import { Alert, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUserInput } from "../../../interfaces/login/IUserInput";
import { getUserInput } from "../../../selectors/selectors";
import {
  handleUserLogin,
  updateForm,
} from "../../../slices/userDetail/userSlice";

export const LoginDetails: React.FC = () => {
  const [userPwd, setUserPwd] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserInput).userEmail;
  const loginMsg = useSelector(getUserInput).loginMsg;
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string | undefined
  ) => {
    const formObj: IUserInput = {};
    formObj[name as keyof IUserInput] = e.target?.value;
    dispatch(updateForm(formObj));
  };
  const handleLogin = () => {
    dispatch(handleUserLogin({ navigate, userPwd }));
  };
  const handleRegistration = () => {};
  return (
    <>
      <Grid container xs={12}>
        {loginMsg && (
          <Grid xs={12} container justifyContent="center">
            <Alert severity="error" style={{ marginBottom: 20 }}>
              {loginMsg}
            </Alert>
          </Grid>
        )}
        <Grid xs={12} textAlign="center">
          <TextField
            autoFocus
            margin="dense"
            label="Enter Email"
            type="string"
            variant="standard"
            required
            value={userEmail}
            onChange={(e) => handleInputChange(e, "userEmail")}
            sx={{ minWidth: 300 }}
          ></TextField>
        </Grid>
        <Grid xs={12} textAlign="center">
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            variant="standard"
            required
            value={userEmail}
            onChange={(e) => setUserPwd(e.target.value)}
            sx={{ minWidth: 300 }}
          ></TextField>
        </Grid>
      </Grid>
      <Box sx={{ paddingTop: 3 }} />
      <Grid xs={12} container justifyContent={"center"}>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Grid>
    </>
  );
};
