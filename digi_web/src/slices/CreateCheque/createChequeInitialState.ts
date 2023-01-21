import { ICreateChequeInitialState } from "../../interfaces/CreateChequeInitialState";

export const createChequeInitialState: ICreateChequeInitialState = {
  shouldShowCreateChequePopup: false,
  createChequeForm: {
    amount: null,
    name: null,
    mobileNumber: null,
    bankId: null,
    chequeClearanceDate: null,
    email: null,
  },
  createChequeIsInProgress: false,
  profileDetails: {
    name: null,
    email: null,
    mobileNumber: null,
  },
  currentTransactionDetails: {
    userid: null,
    transactionId: null,
    amount: null,
    mobileNo: null,
    chequeStatus: null,
    bankName: null,
    chequeClearanceDate: null,
    createdDate: null,
    updatedDate: null,
    email: null,
    name: null,
  },
  chequeHistory: [],
  isRequestProcessing: false,
  isCheckAuthorized: false,
  shouldShowCheuqPreview: false,
  shouldShowRedirectionPopUp: false,
};
