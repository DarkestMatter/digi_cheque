import React, { useEffect, useState } from "react";
import { Button, Grid, Card } from "@mui/material";
import axios from "axios";
import { envProp } from "../../services/envProp";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { handleAuthorizeCheckRequest } from "../../slices/CreateCheque";
import { RootState } from "../../store";

const Authorization: React.FC = () => {
  const { isRequestProcessing } = useSelector(
    (state: RootState) => state.createCheque
  );
  const { currentTransactionDetails, isCheckAuthorized } = useSelector(
    (state: RootState) => state.createCheque
  );
  const dispatch = useDispatch();
  const auth = () => {
    dispatch(handleAuthorizeCheckRequest());
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ margin: "10px", padding: "10px", width: "50%" }}>
        <Grid container xs={12} spacing={2} direction="row">
          <Grid item xs={12} justifyContent="center">
            <b>{currentTransactionDetails.bankName}</b>
          </Grid>
          <Grid item xs={3}>
            Amount:
          </Grid>
          <Grid item xs={9}>
            {currentTransactionDetails.amount}
          </Grid>
          <Grid item xs={3}>
            Name:
          </Grid>
          <Grid item xs={9}>
            Bhushan
          </Grid>
          <Grid item xs={3}>
            Payment Details:
          </Grid>
          <Grid item xs={9}>
            Test Desc
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={auth}>
              Authorize
            </Button>
          </Grid>
          <Grid item xs={12}>
            {isCheckAuthorized && (
              <Alert color="success">Authorization successfull</Alert>
            )}
          </Grid>
          {isRequestProcessing && (
            <Grid item xs={12}>
              Please wait......
            </Grid>
          )}
        </Grid>
      </Card>
    </div>
  );
};
export default Authorization;
