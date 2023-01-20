import React from "react";
import { Button, Grid, Card } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { handleAuthorizeCheckRequest } from "../../slices/CreateCheque";
import { RootState } from "../../store";
import { useNavigate,Link } from "react-router-dom";

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
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ margin: "10px", padding: "10px", width: "50%" }}>
        <Grid container xs={12} spacing={2} direction="row" justifyContent="center">
          <Grid item xs={12} >
            <b>{currentTransactionDetails.bankName}</b>
          </Grid>
          <Grid item xs={3}>
            Amount:
          </Grid>
          <Grid item xs={3}>
            :
          </Grid>
          <Grid item xs={3}>
            {currentTransactionDetails.amount}
          </Grid>
          <Grid item xs={3}>
            
          </Grid>
          <Grid item xs={3}>
            Name:
          </Grid>
          <Grid item xs={3}>
            :
          </Grid>
          <Grid item xs={6}>
          {currentTransactionDetails.name}
          </Grid>
          <Grid item xs={3}>
            Date:
          </Grid>
          <Grid item xs={3}>
            :
          </Grid>
          <Grid item xs={6}>
            {currentTransactionDetails.chequeClearanceDate}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={auth} disabled={isRequestProcessing || isCheckAuthorized}>
              Authorize
            </Button>
          </Grid>
          <Grid item xs={6}>
            {isCheckAuthorized && (
              <>
              <Alert color="success">Authorization successfull</Alert>&nbsp;
              </>
            )}
          </Grid>
          <Grid item xs={6}>
            {isCheckAuthorized && (
              <>
              <Link to='/dashboard'>Go To Dashboard</Link>
              </>
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
