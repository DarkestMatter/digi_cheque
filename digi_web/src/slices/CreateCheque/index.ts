import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    handleCreateChequeRequest() {},
    setCreateChequeIsInProgress: (state, action: PayloadAction<boolean>) => {
      state.createChequeIsInProgress = action.payload;
    },
    setProfileDetails:(state, action: PayloadAction<IProfileDetails>) => {
      state.profileDetails = action.payload;
    },
    getProfileDetailsRequest(){}
  },
});

export const {
  shouldShowCreateChequePopup,
  updateChequeFormData,
  handleCreateChequeRequest,
  setCreateChequeIsInProgress,
  setProfileDetails,
  getProfileDetailsRequest,
} = createCheque.actions;

export const createChequeReducer = createCheque.reducer;
