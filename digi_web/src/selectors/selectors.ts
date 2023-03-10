import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const state = (state: RootState) => state;

export const getUserInput = createSelector(state, (state) => state.form);

export const getChequeBankNameSelector = createSelector(
  state,
  (state) => state?.createCheque?.currentTransactionDetails?.bankName
);
