import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isUserAuthenticatedSelector } from "../../selectors/isUserAuthenticatedSelector";
import InputIcon from "@mui/icons-material/Input";
import { Button } from "@mui/material";

const HeaderFixed = styled.div`
  position: fixed;
  width: 100%;
  height: 65px;
  z-index: 1;
  background-color: #147dff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  color: #fff;
`;

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/dashboard");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };
  const isAuthenticated = useSelector(isUserAuthenticatedSelector);
  return (
    <HeaderFixed>
      <Grid container xs={12} justifyContent="space-between">
        <Grid xs={4}>
          <h3 style={{ marginLeft: 10 }} onClick={handleLogoClick}>
            Digi Cheque
          </h3>
        </Grid>
        {isAuthenticated && (
          <Grid xs={2}>
            <Avatar
              onClick={handleProfileClick}
              style={{ marginTop: 10, cursor: "pointer" }}
              src="/broken-image.jpg"
            />
          </Grid>
        )}
      </Grid>
    </HeaderFixed>
  );
};
