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
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

const Authorization: React.FC = () => {
  const { isRequestProcessing } = useSelector(
    (state: RootState) => state.createCheque
  );
  const { currentTransactionDetails, isCheckAuthorized } = useSelector(
    (state: RootState) => state.createCheque
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width:600px)');
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
    <div style={{padding:'20px'}}>
      <Grid
        container
        xs={12}
        direction="row"
        justifyContent="center"
        textAlign="center"
      >
        <Card
          style={{
            padding: "10px",
            width: matches ?  "100%" : '50%' ,
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
              Name
            </Grid>
            <Grid item xs={3}>
              :
            </Grid>
            <Grid item xs={6} textAlign="left">
              {currentTransactionDetails.name}
            </Grid>
            <Grid item xs={3} textAlign="left">
              Amount
            </Grid>
            <Grid item xs={3}>
              :
            </Grid>
            <Grid item xs={6} textAlign="left">
              {currentTransactionDetails.amount}
            </Grid>
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
      <br/>
      <Grid
        container
        xs={12}
        direction="row"
        justifyContent="center"
        textAlign="center"
      >
        <Card style={{
            padding: "10px",
            width: matches ?  "100%" : '50%',
           
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
    </div>

    </>
  );
};
export default Authorization;
