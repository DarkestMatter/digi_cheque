import { takeLatest } from "redux-saga/effects";
import {
  getChequeHistoryRequest,
  getProfileDetailsRequest,
  handleCreateChequeRequest,
  handleAuthorizeCheckRequest,
  resetStoreRequest
} from "./CreateCheque";
import {
  getChequeDetailsRequest,
  handleBankDetailsRequest,
  handleVerifyOtpRequest,
} from "./reciepent";
import { getProfileDetails } from "./saga/getProfileDetails";
import { handleBankDetails } from "./saga/handleBankDetails";
import { handleCreateCheque } from "./saga/handleCreateCheque";
import { handleVerifyOtp } from "./saga/handleVerifyOtp";
import { handleBankLogin, handleUserLogin } from "./userDetail/userSlice";
import { handleBankLoginSaga } from "./saga/handleBankLogin";
import { handleUserLoginSaga } from "./saga/handleUserLogin";
import { getChequeHistory } from "./saga/getChequeHistory";
import { handleAuthorizeCheck } from "./saga/handleAuthorizeCheck";
import { getChequeDetails } from "./saga/getChequeDetails";
import { handleResetStore } from "./saga/handleResetStore";


export const digiChequeSagas = function* watcher() {
  yield takeLatest(handleCreateChequeRequest.type, handleCreateCheque);
  yield takeLatest(getProfileDetailsRequest.type, getProfileDetails);
  yield takeLatest(handleBankDetailsRequest.type, handleBankDetails);
  yield takeLatest(handleVerifyOtpRequest.type, handleVerifyOtp);
  yield takeLatest(handleBankLogin.type, handleBankLoginSaga);
  yield takeLatest(handleUserLogin.type, handleUserLoginSaga);
  yield takeLatest(getChequeHistoryRequest.type, getChequeHistory);
  yield takeLatest(handleAuthorizeCheckRequest.type, handleAuthorizeCheck);
  yield takeLatest(getChequeDetailsRequest.type, getChequeDetails);
  yield takeLatest(resetStoreRequest.type, handleResetStore);

};
