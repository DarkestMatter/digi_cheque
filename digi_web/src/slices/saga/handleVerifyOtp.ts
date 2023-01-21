import { call, put, select } from "redux-saga/effects";
import { RootState } from "../reducers";
import axios from "axios";
import { envProp } from "../../services/envProp";
import { handleVerifyOtpRequest } from "../reciepent";
import api from "../../services";
export function* handleVerifyOtp(
  action: ReturnType<typeof handleVerifyOtpRequest>
) {
  try {
    const state: RootState = yield select();
    const getLoginURL = `${envProp.api}/bankDetails`;
    const { otp } = state.reciepent.otpVerification;
    const { transId } = state.reciepent.bankDetails;
    const request = {
      otp: otp,
      transId: transId,
    };
    //@ts-ignore
    const response = yield call(api.chequeRequest.verifyOtp, request);
    if (response && response.data.status) {
      action.payload.navigate("/otpVerificationSuccessfull");
    } else {
      action.payload.navigate("/otpVerificationFailled");
    }
  } catch (error) {
  } finally {
  }
}
