import { Alert, FormControl, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ChangeEvent, useEffect, useState } from "react";
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
import { Loader } from "../../Loader";

export const Redirection: React.FC = () => {
  const [countDown, setCountDown] = useState(5);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentTransactionDetails } = useSelector(
    (state: RootState) => state.createCheque
  );
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountDown((t) => t - 1);
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      navigate("/banklogin");
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Grid container xs={12} justifyContent="center">
      <Loader />
      <Grid container xs={12} justifyContent="center">
        <Typography variant="h5" noWrap>
          {`Redirecting to ${getBankName(
            currentTransactionDetails.bankName
          )} portal in ${countDown} seconds...`}
        </Typography>
      </Grid>
    </Grid>
  );
};
