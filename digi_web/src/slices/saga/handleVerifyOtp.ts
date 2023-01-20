import { put, select } from "redux-saga/effects";
import { RootState } from "../reducers";
export function* handleVerifyOtp() {
    try {
        const state: RootState = yield select();
        const { otp} =
            state.reciepent.otpVerification;
        const request = {
            otp: otp,
        };
    } catch (error) {
    } finally {
        
    }
}
