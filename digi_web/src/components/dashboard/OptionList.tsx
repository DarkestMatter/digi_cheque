import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { scripDataListSelector } from "../../selectors/selectors";

export const OptionList: React.FC = () => {
  const scripDataList = useSelector(scripDataListSelector);
  return (
    <Grid container>
      {scripDataList?.map((list) => {
        return (
          <Grid item xs={12} key={list?.token}>
            <Grid item xs={4}>
              <span>Token - {list?.token}</span>
            </Grid>
            <Grid item xs={4}>
              <span>Price - {list?.ltp}</span>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
