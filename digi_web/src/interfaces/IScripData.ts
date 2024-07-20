import { scripCodeEnum } from "../services/enum";

export interface IScripData {
  feed: number[];
  data: IScripObject[];
}

export interface IScripObject {
  scripName?: string;
  token?: number;
  ltp?: number;
  expiryDate?: string;
  strikePrice?: number;
}

export const initialScripDataList: IScripData = {
  feed: [scripCodeEnum.nifty, scripCodeEnum.bankNifty, scripCodeEnum.finnifty],
  data: [],
};
