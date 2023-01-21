import { call, select } from "redux-saga/effects";
import api from "../../services";
import { envProp } from "../../services/envProp";
import { handleBankDetailsRequest } from "../reciepent";
import { RootState } from "../reducers";
export function* handleBankDetails(
  action: ReturnType<typeof handleBankDetailsRequest>
) {
  try {
    const state: RootState = yield select();
    const getLoginURL = `${envProp.api}/bankDetails`;
    const { userName, phoneNumber, accountNumber, IFSCCode, email, transId } =
      state.reciepent.bankDetails;
    const request = {
      userName: userName,
      phoneNumber: phoneNumber,
      accountNumber: accountNumber,
      IFSCCode: IFSCCode,
      email: email,
      transId: transId,
    };
    //@ts-ignore
    const response = yield call(api.chequeRequest.getBankDetails, request);
    if (response && response.data.status === "success") {
      action.payload.navigate("/verifyotp");
    } else {
    }
  } catch (error) {
  } finally {
  }
}
