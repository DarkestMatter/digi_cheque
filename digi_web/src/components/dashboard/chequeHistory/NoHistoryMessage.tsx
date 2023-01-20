import { Typography } from "@mui/material";

export const NoHistoryMessage = () => {
  return (
    <Typography
      variant="h2"
      component="h2"
      sx={{ fontSize: 14 }}
      color="CaptionText"
      gutterBottom
    >
      No cheque history...
    </Typography>
  );
};
