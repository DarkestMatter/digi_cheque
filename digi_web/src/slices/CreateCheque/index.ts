import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createChequeInitialState } from "./createChequeInitialState";

export const createCheque = createSlice({
  name: "createCheque",
  initialState: createChequeInitialState,
  reducers: {
    shouldShowCreateCheckPopup: (state, action: PayloadAction<boolean>) => {
      state.shouldShowCreateChequePopup = action.payload;
    },
  },
});

export const { shouldShowCreateCheckPopup } = createCheque.actions;

export const createChequeReducer = createCheque.reducer;
