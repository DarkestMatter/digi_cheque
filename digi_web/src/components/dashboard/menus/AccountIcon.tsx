import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
export const AccountIcon = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/profile");
  };
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={"primary-search-account-menu"}
      aria-haspopup="true"
      onClick={() => handleOnClick()}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );
};
