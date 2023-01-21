import { RootState } from "../store";
import { getBankDetails } from "../utils/getBankDetails";
import { ToWords } from "to-words";
import moment from "moment";
export const getChquePreviewDataSelectore = (state: RootState) => {
  const formValue = state.createCheque.createChequeForm;
  const banckName = getBankDetails(formValue.bankId)?.name || "";
  const banckIfscCode = getBankDetails(formValue.bankId)?.ifsccode || "";
  const banckAdddress = getBankDetails(formValue.bankId)?.address || "";
  const toWords = new ToWords();
  const amountInWord = toWords.convert(formValue.amount || 0, {
    currency: true,
  });
  //@ts-ignore
  const chequeClearanceDate = moment(formValue?.chequeClearanceDate).format(
    "MM/DD/YYYY"
  );
  return {
    bankName: banckName,
    ifsccode: banckIfscCode,
    bankAddreess: banckAdddress,
    payeName: formValue.name || "",
    amount: formValue.amount || "",
    acountNumber: "0000000985",
    fromName: "Mahesh Deshmukh",
    amountInWord,
    chequeClearanceDate,
  };
};
