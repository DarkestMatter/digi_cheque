import mongoose from "mongoose";
import { IUserDetail } from "../../interface/login/IUserDetails";

const userDetailSchema = new mongoose.Schema<IUserDetail>({
  userEmail: String,
  userPwd: String,
  userMobile: Number,
});
export const userDetailModel = () => mongoose.model("user", userDetailSchema);
