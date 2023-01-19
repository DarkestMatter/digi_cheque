import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const state = (state: RootState) => state;

export const getUserDetail = createSelector(state, (state) => state.addUser);
