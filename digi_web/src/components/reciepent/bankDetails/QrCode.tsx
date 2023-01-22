import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";

export const QrCode: React.FC = () => {
  let { transId } = useParams();
  const [isSubmitChequeOnline, setiIsSubmitChequeOnline] =
    useState<boolean>(false);
  return (
    <>
      <Grid container xs={12}>
        {transId && (
          <Grid
            xs={12}
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 200,
              width: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{
                height: "auto",
                maxWidth: "100%",
                width: "100%",
              }}
              value={transId}
              viewBox={`0 0 256 256`}
            />
          </Grid>
        )}
      </Grid>
      <Grid container xs={12}>
        {!isSubmitChequeOnline && (
          <Grid
            xs={12}
            style={{
              marginTop: 20,
              color: "#5b5353",
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <Grid xs={12} textAlign="center">
              Show QR code at your Bank to submit this Cheque
            </Grid>
            <Grid xs={12} textAlign="center" sx={{ marginTop: 2 }}>
              OR
            </Grid>
            <Grid xs={12} textAlign="center" sx={{ marginTop: 3 }}>
              <Button
                variant="outlined"
                onClick={() => setiIsSubmitChequeOnline(!isSubmitChequeOnline)}
              >
                Submit Cheque Online
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};
