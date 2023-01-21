import { call, put, select } from "redux-saga/effects";
import { RootState } from "../reducers";
import axios from "axios";
import { envProp } from "../../services/envProp";
import SagaIterator from "redux-saga";
import {
  getChequeDetailsRequest,
  handleVerifyOtpRequest,
  updateBankFormData,
} from "../reciepent";
import api from "../../services";
import { ITransId } from "../../interfaces/reciepent/bankDetails";
export function* getChequeDetails(
  action: ReturnType<typeof getChequeDetailsRequest>
): SagaIterator {
  try {
    const getTansChequeDetailsURL = `${envProp.api}/getTansChequeDetails`;
    const request: ITransId = {
      transId: action.payload.transId,
    };
    const response = yield call(
      api.chequeRequest.getTansChequeDetails,
      request
    );
    if (response.data && response.data.success === true) {
      yield put(
        updateBankFormData({
          name: "email",
          value: response.data.data.email,
        })
      );
      yield put(
        updateBankFormData({
          name: "transId",
          value: action?.payload?.transId || "",
        })
      );
    } else {
    }
  } catch (error) {
  } finally {
  }
}
