import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const state = (state: RootState) => state;

// export const getUserInput = createSelector(state, (state) => state.form);

export const scripDataListSelector = createSelector(
  state,
  (state) => state?.scripData?.data
);

export const scripFeedListSelector = createSelector(
  state,
  (state) => state?.scripData.feed
);
