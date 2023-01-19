import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
export const AccountIcon = () => {
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={"primary-search-account-menu"}
      aria-haspopup="true"
      onClick={() => {}}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );
};
