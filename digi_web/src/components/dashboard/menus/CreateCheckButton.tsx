import { Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useDispatch } from "react-redux";
import { shouldShowCreateChequePopup } from "../../../slices/CreateCheque";
export const CreateCheckButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="contained"
      startIcon={<ControlPointIcon />}
      style={{ margin: "0 auto", display: "flex" }}
      onClick={() => dispatch(shouldShowCreateChequePopup(true))}
    >
      Create Check
    </Button>
  );
};
