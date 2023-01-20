import React, { useEffect, useState } from "react";
import { Button, Grid, Card } from "@mui/material";
import axios from "axios";
import { envProp } from "../../services/envProp";
import Alert from "@mui/material/Alert";
import {useDispatch,useSelector} from 'react-redux'
import { setRequestProcessing } from "../../slices/CreateCheque";
import { RootState } from "../../store";

const authURL = `${envProp.api}/authorization`;
const getChequeURL = `${envProp.api}/getChequeDetails`;
interface chequeDetails {
  bankName: string;
  chequeID: number;
  isAuthorize: boolean;
  userName: string;
  desc: string;
  amount: number;
}

const Authorization: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [checkDetails, setCheckDetails] = useState({} as chequeDetails);
const {isRequestProcessing} =  useSelector(
  (state: RootState) => state.createCheque
);
  const dispatch = useDispatch()
  const auth = () => {
    dispatch(setRequestProcessing(true))
    axios
      .post(authURL, {
        transactionId: "0.015653368235615917",
      })
      .then((response) => {
        dispatch(setRequestProcessing(false))
        if (response.data) {
          if (response.data.chequeStatus === "Authorized") {
            setIsAuth(true);
          }
        }
      });
  };
  useEffect(() => {
    axios
      .post(getChequeURL, {
        chequeId: "123",
      })
      .then((response) => {
        if (response.data) {
          console.log("check details", response.data);
          setCheckDetails(response.data);
        }
      });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ margin: "10px", padding: "10px", width: "50%" }}>
        <Grid container xs={12} spacing={2} direction="row">
          <Grid item xs={12} justifyContent="center">
            <b>{checkDetails.bankName}</b>
          </Grid>
          <Grid item xs={3}>
            Amount:
          </Grid>
          <Grid item xs={9}>
            {checkDetails.amount}
          </Grid>
          <Grid item xs={3}>
            Name:
          </Grid>
          <Grid item xs={9}>
            {checkDetails.userName}
          </Grid>
          <Grid item xs={3}>
            Payment Details:
          </Grid>
          <Grid item xs={9}>
            {checkDetails.desc}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={auth}>
              Authorize
            </Button>
          </Grid>
          <Grid item xs={12}>
            {isAuth && <Alert color="success">Authorization successfull</Alert>}
          </Grid>
          {isRequestProcessing && ( <Grid item xs={12}>
           Please wait......
          </Grid>)}
        </Grid>
      </Card>
    </div>
  );
};
export default Authorization;
