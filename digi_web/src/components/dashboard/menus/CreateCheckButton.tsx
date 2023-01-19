import { Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useDispatch } from "react-redux";
import { shouldShowCreateChequePopup } from "../../../slices/CreateCheque";
export const CreateCheckButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      color="inherit"
      onClick={() => dispatch(shouldShowCreateChequePopup(true))}
    >
      <ControlPointIcon />
      Create Check
    </Button>
  );
};
