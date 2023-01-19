import mongoose from "mongoose";
import { ICreatechequerequest } from "../../interface/createcheque/createchequerequest";

const createChequeSchema = new mongoose.Schema<ICreatechequerequest>({
    userid: String,
    transactionId: String,
    amount:Number,
    mobileNo:Number,
    chequeStatus:String,
    bankName:String,
    checkClearanceDate: Date,
    createdDate: Date,
    updatedDate: Date
});
export const createChequeModel = () => mongoose.model("createCheque", createChequeSchema);