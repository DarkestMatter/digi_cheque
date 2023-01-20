import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reciepentInitialState } from "./reciepentInitialState";

export const reciepent = createSlice({
  name: "reciepent",
  initialState: reciepentInitialState,
  reducers: {
    updateBankFormData: (
      state,
      action: PayloadAction<{ name: string; value: string | number | Date }>
    ) => {
      
    },
    handleBankDetailsRequest() {},
  },
});

export const {
    updateBankFormData,
    handleBankDetailsRequest,
} = reciepent.actions;

export const reciepentReducer = reciepent.reducer;
