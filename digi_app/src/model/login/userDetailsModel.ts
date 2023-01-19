import mongoose from "mongoose";
import { IStockList } from "../../interface/login/IUserDetails";

const stockListSchema = new mongoose.Schema<IStockList>({
  userName: String,
  userId: Number,
});
export const stockListModel = () => mongoose.model("m_stock", stockListSchema);
