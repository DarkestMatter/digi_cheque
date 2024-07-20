import Grid from "@mui/material/Grid";
import { WSConnect } from "./WSConnect";
import { OptionList } from "./OptionList";

export const Dashboard: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <WSConnect />
        <OptionList />
      </Grid>
    </Grid>
  );
};
