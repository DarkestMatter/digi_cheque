import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IcurrentTransactionDetails } from "../../interfaces/Cheque/currentTransactionDetails";
import { IProfileDetails } from "../../interfaces/Cheque/profileDetails";
import { createChequeInitialState } from "./createChequeInitialState";

export const createCheque = createSlice({
  name: "createCheque",
  initialState: createChequeInitialState,
  reducers: {
    shouldShowCreateChequePopup: (state, action: PayloadAction<boolean>) => {
      state.shouldShowCreateChequePopup = action.payload;
    },
    updateChequeFormData: (
      state,
      action: PayloadAction<{ name: string; value: string | number | Date }>
    ) => {
      // @ts-ignore
      state.createChequeForm[action.payload.name] = action.payload.value;
    },
    handleCreateChequeRequest:(state, action:PayloadAction<any>) =>{},
    setCreateChequeIsInProgress: (state, action: PayloadAction<boolean>) => {
      state.createChequeIsInProgress = action.payload;
    },
    setProfileDetails:(state, action: PayloadAction<IProfileDetails>) => {
      state.profileDetails = action.payload;
    },
    getProfileDetailsRequest(){},
    saveCurrentTransactionDetails:(state, action: PayloadAction<IcurrentTransactionDetails>) => {
      state.currentTransactionDetails = action.payload;
    },
    resetCreateChequeFormData:(state) => {
      state.createChequeForm = createChequeInitialState.createChequeForm
    },
  },
});

export const {
  shouldShowCreateChequePopup,
  updateChequeFormData,
  handleCreateChequeRequest,
  setCreateChequeIsInProgress,
  setProfileDetails,
  getProfileDetailsRequest,
  saveCurrentTransactionDetails,
  resetCreateChequeFormData,
} = createCheque.actions;

export const createChequeReducer = createCheque.reducer;
