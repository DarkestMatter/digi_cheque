import Grid from "@mui/material/Grid";
import { WSConnect } from "./WSConnect";

export const Dashboard: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <WSConnect />
      </Grid>
    </Grid>
  );
};
