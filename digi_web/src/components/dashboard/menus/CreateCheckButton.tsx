import { Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useDispatch } from "react-redux";
import { shouldShowCreateCheckPopup } from "../../../slices/CreateCheque";
export const CreateCheckButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      color="inherit"
      onClick={() => dispatch(shouldShowCreateCheckPopup(true))}
    >
      <ControlPointIcon />
      Create Check
    </Button>
  );
};
