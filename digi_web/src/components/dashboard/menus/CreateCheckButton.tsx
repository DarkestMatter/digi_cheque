import { Avatar, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { shouldShowCreateChequePopup } from "../../../slices/CreateCheque";
import chequeIcon from "../../../assets/cheque_icon.png";
export const CreateCheckButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        variant="contained"
        startIcon={<Avatar variant="rounded" src={chequeIcon} />}
        style={{ margin: "0 auto", display: "flex" }}
        onClick={() => dispatch(shouldShowCreateChequePopup(true))}
      >
        Write Check
      </Button>
    </>
  );
};
