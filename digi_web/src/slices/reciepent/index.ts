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
      // @ts-ignore
      state.bankDetails[action.payload.name] = action.payload.value;
    },
    updateOtpData: (
      state,
      action: PayloadAction<{ name: string; value: string | number | Date }>
    ) => {
      // @ts-ignore
      state.otpVerification[action.payload.name] = action.payload.value;
    },
    handleBankDetailsRequest() {},
    handleVerifyOtpRequest() {},
  },
});

export const {
    updateBankFormData,
    updateOtpData,
    handleBankDetailsRequest,
    handleVerifyOtpRequest,
} = reciepent.actions;

export const reciepentReducer = reciepent.reducer;
