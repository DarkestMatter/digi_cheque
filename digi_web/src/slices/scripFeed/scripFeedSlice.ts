import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IScripData,
  IScripObject,
  initialScripDataList,
} from "../../interfaces/IScripData";

export const scripFeedSlice = createSlice({
  name: "scripData",
  initialState: initialScripDataList,
  reducers: {
    updateScripData: (state, action: PayloadAction<IScripObject>) => {
      if (state?.data?.length) {
        state?.data?.forEach((data) => {
          if (data?.token === action.payload?.token) {
            data.ltp = action.payload?.ltp;
          } else {
            data = action.payload;
          }
        });
      } else {
        state.data.push(action.payload);
      }
    },
    updateScripFeed: (state, action: PayloadAction<IScripObject>) => {},
  },
});

export const { updateScripData, updateScripFeed } = scripFeedSlice.actions;

export const scripDataReducer = scripFeedSlice.reducer;
