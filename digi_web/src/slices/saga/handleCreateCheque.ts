import { put, select, call } from "redux-saga/effects";
import api from "../../services";
import {
  handleCreateChequeRequest,
  resetCreateChequeFormData,
  saveCurrentTransactionDetails,
  setCreateChequeIsInProgress,
  shouldShowCreateChequePopup,
} from "../CreateCheque";
import { RootState } from "../reducers";
import { SagaIterator } from "redux-saga";
import { ICreateChequeRequest } from "../../interfaces/Cheque/CreateChequeRequest";

export function* handleCreateCheque(
  action: ReturnType<typeof handleCreateChequeRequest>
): SagaIterator {
  try {
    yield put(setCreateChequeIsInProgress(true));
    const state: RootState = yield select();
    const { amount, name, chequeClearanceDate, bankId, mobileNumber, email } =
      state.createCheque.createChequeForm;
    //@ts-ignore
    const request: ICreateChequeRequest = {
      userid: "1002",
      amount,
      name,
      chequeClearanceDate,
      bankName: bankId,
      mobileNo: mobileNumber,
      email,
    };
    const response = yield call(api.chequeRequest.createCheque,request)
     if(response?.data && response.status === 200){
      yield put(saveCurrentTransactionDetails(response.data.data))
      yield put(shouldShowCreateChequePopup(false))
      yield put(resetCreateChequeFormData())
      action.payload.navigate('/banklogin')
    }
  } catch (error) {
  } finally {
    yield put(setCreateChequeIsInProgress(false));
  }
}
