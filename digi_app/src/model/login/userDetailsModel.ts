import mongoose from "mongoose";
import { IUserDetail } from "../../interface/login/IUserDetails";

const userDetailSchema = new mongoose.Schema<IUserDetail>({
  userName: String,
  userId: Number,
});
export const userDetailModel = () => mongoose.model("user", userDetailSchema);
