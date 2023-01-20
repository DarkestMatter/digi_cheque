import { combineReducers } from "@reduxjs/toolkit";
import { createChequeReducer } from "./CreateCheque";
import { userInputReducer } from "./userDetail/userSlice";
import { reciepentReducer } from "./reciepent";


export const reducers = combineReducers({
  form: userInputReducer,
  createCheque: createChequeReducer,
  reciepent: reciepentReducer,
});

export type RootState = ReturnType<typeof reducers>;
