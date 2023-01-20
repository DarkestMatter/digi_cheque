import { put, select, call } from "redux-saga/effects";
import api from "../../services";
import { SagaIterator } from "redux-saga";
import { IGetChequeHistory } from "../../interfaces/Cheque/getChequeHistoryResponse";
import { setChequeHistoryData } from "../CreateCheque";
import { IChequeHistory } from "../../interfaces/Cheque/chequeHistory";
const responseMapper = (data: IGetChequeHistory[]) => {
  return data.map((chequeData) => {
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
  });
};
export function* getChequeHistory(): SagaIterator {
  try {
    const userId = "1002";
    const response = yield call(api.chequeRequest.getChequehistory, userId);
    if (response?.data && response.status === 200) {
      const data: IChequeHistory[] = responseMapper(response?.data?.data);
      yield put(setChequeHistoryData(data));
    }
  } catch (error) {}
}
