import { ICreateChequeForm } from "./Cheque/createChequeForm";

export interface ICreateChequeInitialState {
  shouldShowCreateChequePopup: boolean;
  createChequeForm: ICreateChequeForm;
  createChequeIsInProgress: boolean
}
