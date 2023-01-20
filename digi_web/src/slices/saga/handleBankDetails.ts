import { put, select } from "redux-saga/effects";
import { handleBankDetailsRequest } from "../reciepent";
import { RootState } from "../reducers";
export function* handleBankDetails(action: ReturnType<typeof handleBankDetailsRequest>) {
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
        console.log(action.payload.navigate)
        action.payload.navigate("/verifyotp");
    } catch (error) {
    } finally {
        
    }
}
