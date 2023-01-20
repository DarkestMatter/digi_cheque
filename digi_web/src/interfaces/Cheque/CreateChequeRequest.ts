import { Dayjs } from "dayjs";
export interface ICreateChequeRequest {
  userid: string;
  amount: number | null;
  name: string | null;
  chequeClearanceDate: Date | Dayjs | null;
  bankName: string | null;
  mobileNo: number | null;
  email: string | null;
}
export interface IAuthorizeCheckRequest{
  transactionId : string | null
  emailId : string | null
}
