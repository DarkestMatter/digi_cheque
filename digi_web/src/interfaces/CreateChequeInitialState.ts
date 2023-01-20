import { IChequeHistory } from "./Cheque/chequeHistory";
import { ICreateChequeForm } from "./Cheque/createChequeForm";
import { IcurrentTransactionDetails } from "./Cheque/currentTransactionDetails";
import { IProfileDetails } from "./Cheque/profileDetails";

export interface ICreateChequeInitialState {
  shouldShowCreateChequePopup: boolean;
  createChequeForm: ICreateChequeForm;
  createChequeIsInProgress: boolean;
  profileDetails: IProfileDetails;
  currentTransactionDetails: IcurrentTransactionDetails;
  chequeHistory: IChequeHistory[];
  isRequestProcessing :boolean
}
