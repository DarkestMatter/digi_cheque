import { ICreateChequeInitialState } from "../../interfaces/CreateChequeInitialState";

export const createChequeInitialState: ICreateChequeInitialState = {
  shouldShowCreateChequePopup: false,
  createChequeForm: {
    amount: null,
    name: null,
    mobileNumber: null,
    bankId: null,
    chequeClearanceDate: null,
  },
  createChequeIsInProgress: false,
  profileDetails:{
    name:null,
    email:null,
    mobileNumber:null,
  }
};
