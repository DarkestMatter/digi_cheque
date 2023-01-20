import { put, select } from "redux-saga/effects";
import { RootState } from "../reducers";
export function* handleBankDetails() {
    try {
        const state: RootState = yield select();
        const { userName, phoneNumber, accountNumber, IFSCCode } =
            state.reciepent.bankDetails;
        const request = {
            userName: userName,
            phoneNumber: phoneNumber,
            accountNumber: accountNumber,
            IFSCCode: IFSCCode,
        };
    } catch (error) {
    } finally {
        
    }
}
