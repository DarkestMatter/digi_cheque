import { takeLatest } from "redux-saga/effects";
import {
  getChequeHistoryRequest,
  getProfileDetailsRequest,
  handleCreateChequeRequest,
} from "./CreateCheque";
import { handleBankDetailsRequest, handleVerifyOtpRequest } from "./reciepent";
import { getProfileDetails } from "./saga/getProfileDetails";
import { handleBankDetails } from "./saga/handleBankDetails";
import { handleCreateCheque } from "./saga/handleCreateCheque";
import { handleVerifyOtp } from "./saga/handleVerifyOtp";
import { handleBankLogin } from "./userDetail/userSlice";
import { handleBankLoginSaga } from "./saga/handleBankLogin";
import { getChequeHistory } from "./saga/getChequeHistory";

export const digiChequeSagas = function* watcher() {
  yield takeLatest(handleCreateChequeRequest.type, handleCreateCheque);
  yield takeLatest(getProfileDetailsRequest.type, getProfileDetails);
  yield takeLatest(handleBankDetailsRequest.type, handleBankDetails);
  yield takeLatest(handleVerifyOtpRequest.type, handleVerifyOtp);
  yield takeLatest(handleBankLogin.type, handleBankLoginSaga);
  yield takeLatest(getChequeHistoryRequest.type, getChequeHistory);
};
