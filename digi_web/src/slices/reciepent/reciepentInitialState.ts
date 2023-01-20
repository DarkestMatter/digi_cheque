import { IreciepentInitialState } from "../../interfaces/reciepent/reciepentInitialState";

export const reciepentInitialState: IreciepentInitialState = {
    bankDetails: {
        userName: null,
        phoneNumber: null,
        accountNumber: null,
        IFSCCode: null
    },
    otpVerification: {
        Failed: false,
        success: false,
        otp: null,
    },
};
