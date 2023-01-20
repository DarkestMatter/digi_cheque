import { put, select } from "redux-saga/effects";
import { setCreateChequeIsInProgress } from "../CreateCheque";
import { RootState } from "../reducers";
export function* handleBankDetailsRequest() {
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
