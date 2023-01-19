import { put, select } from "redux-saga/effects";
import { setCreateChequeIsInProgress } from "../CreateCheque";
import { RootState } from "../reducers";
export function* handleCreateCheque() {
  try {
    yield put(setCreateChequeIsInProgress(true));
    const state: RootState = yield select();
    const { amount, name, chequeClearanceDate, bankId,mobileNumber } =
      state.createCheque.createChequeForm;
    const request = {
      amount,
      name,
      chequeClearanceDate,
      bankName: bankId,
      mobileNo:mobileNumber,
    };
  } catch (error) {
  } finally {
    //yield put(setCreateChequeIsInProgress(false));
  }
}
