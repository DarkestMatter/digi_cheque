import { Dayjs } from "dayjs";
export interface ICreateChequeForm {
  amount: number | null;
  name: string | null;
  mobileNumber: number | null
  bankId:string | null
  chequeClearanceDate: Date | Dayjs | null
}
