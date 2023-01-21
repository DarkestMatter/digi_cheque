import { put, select, call } from "redux-saga/effects";
import api from "../../services";
import {
  saveCurrentTransactionDetails,
  resetStoreRequest,
  setAuthorization,
} from "../CreateCheque";
import { SagaIterator } from "redux-saga";
import { IcurrentTransactionDetails } from "../../interfaces/Cheque/currentTransactionDetails";

export function* handleResetStore(
  action: ReturnType<typeof resetStoreRequest>
): SagaIterator {
  try {
    yield put(saveCurrentTransactionDetails({} as IcurrentTransactionDetails));
    yield put(setAuthorization(false));
  } catch (error) {
  } 
}
