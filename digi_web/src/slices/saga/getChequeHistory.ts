import { put, select, call } from "redux-saga/effects";
import api from "../../services";
import { SagaIterator } from "redux-saga";
import { IGetChequeHistory } from "../../interfaces/Cheque/getChequeHistoryResponse";
import { setChequeHistoryData } from "../CreateCheque";
import { IChequeHistory } from "../../interfaces/Cheque/chequeHistory";
import { RootState } from "../reducers";
import { getLoggedInUserEmailSelector } from "../../selectors/getLoggedInUserEmailSelector";
const responseMapper = (data: IGetChequeHistory[]) => {
  return data
    .map((chequeData) => {
      return {
        userid: chequeData.userid,
        transactionId: chequeData.transactionId,
        amount: chequeData.amount,
        mobileNo: chequeData.mobileNo,
        chequeStatus: chequeData.chequeStatus,
        bankName: chequeData.bankName,
        chequeClearanceDate: chequeData.chequeClearanceDate,
        createdDate: chequeData.createdDate,
        updatedDate: chequeData.updatedDate,
        email: chequeData.email,
        name: chequeData.name,
      };
    })
    .sort((a, b) => {
      let keyA = new Date(a?.createdDate);
      let keyB = new Date(b?.createdDate);
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
};
export function* getChequeHistory(): SagaIterator {
  try {
    const state: RootState = yield select();
    const userId = yield select(getLoggedInUserEmailSelector);
    const response = yield call(api.chequeRequest.getChequehistory, userId);
    if (response?.data && response.status === 200) {
      const data: IChequeHistory[] = responseMapper(response?.data?.data);
      yield put(setChequeHistoryData(data));
    }
  } catch (error) {}
}
