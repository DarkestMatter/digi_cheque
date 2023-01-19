import { combineReducers } from "@reduxjs/toolkit";
import { createChequeReducer } from "./CreateCheque";
import { userInputReducer } from "./userDetail/userSlice";

export const reducers = combineReducers({
  form: userInputReducer,
  createCheque: createChequeReducer,
});

export type RootState = ReturnType<typeof reducers>;
