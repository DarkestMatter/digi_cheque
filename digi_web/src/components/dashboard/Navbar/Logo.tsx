import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getChequeBankNameSelector } from "../../../selectors/selectors";
import { getBankName } from "../../../utils/getBanckName";
export const Logo = () => {
  const isBankRoute = ["/banklogin", "/auth"].includes(location.pathname);
  const bankName = getBankName(useSelector(getChequeBankNameSelector));
  return (
    <>
      <AccountBalanceIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Digi Cheque
      </Typography>
      <AccountBalanceIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {isBankRoute ? bankName : "Digi Cheque"}
      </Typography>
    </>
  );
};
