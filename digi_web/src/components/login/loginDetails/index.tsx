import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export const LoginDetails: React.FC = () => {
  const navigate = useNavigate();
  const handleGoToCreateStartegy = () => {
    navigate("/login");
  };
  return <Grid container xs={12}></Grid>;
};
