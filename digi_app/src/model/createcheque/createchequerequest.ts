import mongoose from "mongoose";
import { ICreatechequerequest } from "../../interface/createcheque/createchequerequest";

const createChequeSchema = new mongoose.Schema<ICreatechequerequest>({
  userid: String,
  transactionId: String,
  amount: Number,
  mobileNo: Number,
  chequeStatus: String,
  bankName: String,
  chequeClearanceDate: Date,
  createdDate: Date,
  updatedDate: Date,
  email: String,
  name: String,
});
export const createChequeModel = () =>
  mongoose.model("createCheque", createChequeSchema);
