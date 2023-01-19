import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import { envProp } from "../../services/envProp";
import Alert from "@mui/material/Alert";

const authURL = `${envProp.api}/authorization`;
const getChequeURL = `${envProp.api}/getChequeDetails`;
interface chequeDetails {
  bankName : string;
  chequeID : number;
  isAuthorize : boolean;
  userName:string
  desc : string
  amount : number
}

const Authorization: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [checkDetails, setCheckDetails] = useState({} as chequeDetails);
  const auth = () => {
    axios
      .post(authURL, {
        chequeId: "123",
      })
      .then((response) => {
        if (response.data) {
          if (response.data.isAuthorize) {
            setIsAuth(response.data.isAuthorize);
          }
        }
        // dispatch(updateGallery(response.data));
      });
  };
  useEffect(() => {
    axios
      .post(getChequeURL, {
        chequeId: "123",
      })
      .then((response) => {
        if (response.data) {
          console.log('check details',response.data)
          setCheckDetails(response.data);
        }
      });
  }, []);

  return (
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
    </Grid>
  );
};
export default Authorization;
