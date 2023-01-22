import { RootState } from "../store";
import { getBankDetails } from "../utils/getBankDetails";
import { ToWords } from "to-words";
import moment from "moment";
export const getAuthChequeDataSelector = (state: RootState) => {
  const data = state.createCheque.currentTransactionDetails;
  const banckName = getBankDetails(data.bankName)?.name || "";
  const banckIfscCode = getBankDetails(data.bankName)?.ifsccode || "";
  const banckAdddress = getBankDetails(data.bankName)?.address || "";
  const toWords = new ToWords();
  const amountInWord = toWords.convert(data.amount || 0, {
    currency: true,
  });
  //@ts-ignore
  const chequeClearanceDate = moment(data?.chequeClearanceDate).format(
    "MM/DD/YYYY"
  );
  return {
    bankName: banckName,
    ifsccode: banckIfscCode,
    bankAddreess: banckAdddress,
    payeName: data.name || "",
    amount: data.amount || "",
    acountNumber: "0000000985",
    fromName: "Mahesh Deshmukh",
    amountInWord,
    chequeClearanceDate,
  };
};
