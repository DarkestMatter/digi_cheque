import { ICreateChequeForm } from "./Cheque/createChequeForm";
import { IProfileDetails } from "./Cheque/profileDetails";

export interface ICreateChequeInitialState {
  shouldShowCreateChequePopup: boolean;
  createChequeForm: ICreateChequeForm;
  createChequeIsInProgress: boolean;
  profileDetails: IProfileDetails;
}
