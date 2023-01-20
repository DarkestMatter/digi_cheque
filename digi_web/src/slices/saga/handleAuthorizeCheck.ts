import { put, select, call } from "redux-saga/effects";
import api from "../../services";
import {
  saveCurrentTransactionDetails,
  setRequestProcessing,
  handleAuthorizeCheckRequest,
  setAuthorization,
} from "../CreateCheque";
import { RootState } from "../reducers";
import { SagaIterator } from "redux-saga";
import { IAuthorizeCheckRequest } from "../../interfaces/Cheque/CreateChequeRequest";

export function* handleAuthorizeCheck(
  action: ReturnType<typeof handleAuthorizeCheckRequest>
): SagaIterator {
  try {
    yield put(setRequestProcessing(true));
    const state: RootState = yield select();
    const { currentTransactionDetails } = state.createCheque;
    const request: IAuthorizeCheckRequest = {
      transactionId: 'd9770c83-4e99-4978-bee6-df199228055c',//currentTransactionDetails.transactionId,
      emailId: 'bhushanjire@gmail.com'//currentTransactionDetails.email,
    };
    const response = yield call(api.chequeRequest.authorizedCheck, request);

    if (response?.data && response.status === 200) {
      yield put(setAuthorization(true));
      yield put(saveCurrentTransactionDetails(response.data));
      action.payload.navigate("/dashboard");
    }
  } catch (error) {
  } finally {
    yield put(setRequestProcessing(false));
  }
}
