import mongoose from "mongoose";
import { IBankLogin } from "../../../interface/bank/login/IBankLogin";

const bankLoginSchema = new mongoose.Schema<IBankLogin>({
  userName: String,
  password: String,
});
export const bankLoginModel = () =>
  mongoose.model("bankLogin", bankLoginSchema);
