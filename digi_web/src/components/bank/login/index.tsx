import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUserInput } from "../../../interfaces/login/IUserInput";
import { getUserInput } from "../../../selectors/selectors";
import { updateForm } from "../../../slices/userDetail/userSlice";

export const BankLogin: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bankLoginUserName = useSelector(getUserInput).bankLoginUserName;
  const bankLoginPassword = useSelector(getUserInput).bankLoginPassword;
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    const formObj: IUserInput = {};
    formObj[name as keyof IUserInput] = e.target?.value;
    dispatch(updateForm(formObj));
  };
  const handleGoAuthorization = () => {
    navigate("/bankAuth");
  };
  return (
    <Grid container xs={12}>
      <TextField
        id="bankUserName"
        value={bankLoginUserName}
        variant="outlined"
        size="small"
        label="UserName"
        onChange={(e) => handleInputChange(e, "bankLoginUserName")}
      />
      <TextField
        id="bankPassword"
        variant="outlined"
        size="small"
        label="Password"
        type="password"
        value={bankLoginPassword}
        onChange={(e) => handleInputChange(e, "bankLoginPassword")}
      />
    </Grid>
  );
};
