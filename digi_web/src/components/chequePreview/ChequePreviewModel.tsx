import "./cheque.css";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setShouldShowCheuqPreview } from "../../slices/CreateCheque";
import ChequePreview from "./ChequePreview";
import { RootState } from "../../store";
import { getChquePreviewDataSelectore } from "../../selectors/getChquePreviewDataSelectore";

export const ChequePreviewModel = () => {
  const dispatch = useDispatch();
  const shouldShowCheuqPreview = useSelector(
    (state: RootState) => state.createCheque.shouldShowCheuqPreview
  );
  const handleClose = () => {
    dispatch(setShouldShowCheuqPreview(false));
  };
  const chequePreviewValue = useSelector(getChquePreviewDataSelectore);
  return (
    <Modal
      open={shouldShowCheuqPreview}
      onClose={() => {}}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <ChequePreview
        shouldShow={shouldShowCheuqPreview}
        payeName={chequePreviewValue.payeName}
        amount={chequePreviewValue.amount}
        acountNumber={chequePreviewValue.acountNumber}
        ifsccode={chequePreviewValue.ifsccode}
        bankAddreess={chequePreviewValue.bankAddreess}
        bankName={chequePreviewValue.bankName}
        fromName={chequePreviewValue.fromName}
        amountInWord={chequePreviewValue.amountInWord}
        chequeClearanceDate={chequePreviewValue.chequeClearanceDate}
        handleClose={handleClose}
      />
    </Modal>
  );
};
