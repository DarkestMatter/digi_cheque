import { put, select,call } from "redux-saga/effects";
import api from "../../services";
import { handleCreateChequeRequest, resetCreateChequeFormData, saveCurrentTransactionDetails, setCreateChequeIsInProgress, shouldShowCreateChequePopup } from "../CreateCheque";
import { RootState } from "../reducers";
import { SagaIterator } from "redux-saga";
import { ICreateChequeRequest } from "../../interfaces/Cheque/CreateChequeRequest";

export function* handleCreateCheque(action:ReturnType<typeof handleCreateChequeRequest>):SagaIterator {
  try {
    yield put(setCreateChequeIsInProgress(true));
    const state: RootState = yield select();
    const { amount, name, chequeClearanceDate, bankId,mobileNumber } =
      state.createCheque.createChequeForm;
    const request:ICreateChequeRequest = {
      userid:'12233',
      amount,
      name,
      chequeClearanceDate,
      bankName: bankId,
      mobileNo:mobileNumber,
    };
    const response = yield call(api.chequeRequest.createCheque,request)
     if(response?.data && response.status === 200){
      yield put(saveCurrentTransactionDetails(response.data))
      yield put(shouldShowCreateChequePopup(false))
      yield put(resetCreateChequeFormData())
      action.payload.navigate('/auth')
    }
  } catch (error) {
  } finally {
    //yield put(setCreateChequeIsInProgress(false));
  }
}
