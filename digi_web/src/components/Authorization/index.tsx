import React from "react";
import { Button, Grid, Card } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAuthorizeCheckRequest,
  resetStoreRequest,
} from "../../slices/CreateCheque";
import { RootState } from "../../store";
import { useNavigate, Link } from "react-router-dom";
import { getBankName } from "../../utils/getBanckName";
import { formatDate } from "../../utils/functions";

const Authorization: React.FC = () => {
  const { isRequestProcessing } = useSelector(
    (state: RootState) => state.createCheque
  );
  const { currentTransactionDetails, isCheckAuthorized } = useSelector(
    (state: RootState) => state.createCheque
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = () => {
    dispatch(handleAuthorizeCheckRequest({ navigate }));
  };
  let displayFormate = "";
  if (currentTransactionDetails?.chequeClearanceDate) {
    displayFormate = formatDate(
      new Date(currentTransactionDetails.chequeClearanceDate)
    );
  }

  return (
    <>
      <Grid
        container
        xs={12}
        spacing={2}
        direction="row"
        justifyContent="center"
        textAlign="center"
      >
        <Card
          style={{
            margin: "10px",
            padding: "10px",
            width: "50%",
            background: "#D3D3D3",
          }}
        >
          <Grid
            container
            xs={12}
            spacing={2}
            direction="row"
            justifyContent="center"
            textAlign="center"
          >
            <Grid item xs={12} textAlign="center">
              <b>{getBankName(currentTransactionDetails.bankName)}</b>
            </Grid>
            <Grid item xs={3} textAlign="left">
              Amount
            </Grid>
            <Grid item xs={3}>
              :
            </Grid>
            <Grid item xs={3} textAlign="left">
              {currentTransactionDetails.amount}
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3} textAlign="left">
              Name
            </Grid>
            <Grid item xs={3}>
              :
            </Grid>
            <Grid item xs={3} textAlign="left">
              {currentTransactionDetails.name}
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3} textAlign="left">
              Date
            </Grid>
            <Grid item xs={3}>
              :
            </Grid>
            <Grid item xs={6} textAlign="left">
              {displayFormate}
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid
        container
        xs={12}
        spacing={2}
        direction="row"
        justifyContent="center"
        textAlign="center"
        style={{marginTop : '5px'}}
      >
        <Card style={{
            margin: "10px",
            padding: "10px",
            width: "50%",
           
          }}>
          <Grid item xs={12} spacing={5} style={{marginBottom : '10px'}}>
            <Button
              variant="contained"
              onClick={auth}
              disabled={isRequestProcessing || isCheckAuthorized}
            >
              Authorize
            </Button>
          </Grid>

          {isRequestProcessing && (
            <Grid item xs={12}>
              Please wait......
            </Grid>
          )}
          <Grid item xs={12}>
            {isCheckAuthorized && (
              <>
                <Alert color="success">Authorization successfull</Alert>&nbsp;
              </>
            )}
          </Grid>
          <Grid item xs={12}>
            {isCheckAuthorized && (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => {
                    dispatch(resetStoreRequest());
                  }}
                >
                  Go To Dashboard
                </Link>
              </>
            )}
          </Grid>
        </Card>
      </Grid>
    </>
  );
};
export default Authorization;
