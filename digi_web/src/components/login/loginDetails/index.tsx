import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
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
  const [showLoginBox, setShowLoginBox] = useState<Boolean>(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserInput).userEmail;
  const userMobile = useSelector(getUserInput).userMobile;
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
            variant="outlined"
            required
            value={userEmail}
            onChange={(e) => handleInputChange(e, "userEmail")}
            sx={{ minWidth: 300 }}
          ></TextField>
        </Grid>
        <Grid xs={12} textAlign="center">
          <FormControl
            sx={{ m: 1, width: "25ch", minWidth: 300 }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setUserPwd(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        {!showLoginBox && (
          <Grid xs={12} sm={4} textAlign="center">
            <TextField
              autoFocus
              margin="dense"
              label="Enter Mobile No"
              type="number"
              variant="outlined"
              required
              value={userEmail}
              onChange={(e) => handleInputChange(e, "userMobile")}
              sx={{ minWidth: 300 }}
            ></TextField>
          </Grid>
        )}
      </Grid>
      <Grid xs={12} container justifyContent={"center"}>
        {showLoginBox ? (
          <Button onClick={handleLogin}>Login</Button>
        ) : (
          <Button onClick={handleRegistration}>Login</Button>
        )}
      </Grid>
      {/* <Grid xs={12} container justifyContent={"center"}>
        <span>Not a Member,</span>
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setShowLoginBox(false)}
        >
          Register here
        </span>
      </Grid> */}
    </>
  );
};
