import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../../interfaces/login/initialState";
import { IUserInput } from "../../interfaces/login/IUserInput";

export const userSlice = createSlice({
  name: "userInput",
  initialState: initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<IUserInput>) => {
      switch (true) {
        case Object.keys(action.payload).includes("userName"):
          state.userName = action.payload.userName;
          break;
        case Object.keys(action.payload).includes("userId"):
          state.userId = action.payload.userId;
          break;
        case Object.keys(action.payload).includes("bankLoginUserName"):
          state.bankLoginUserName = action.payload.bankLoginUserName;
          break;
        case Object.keys(action.payload).includes("bankLoginPassword"):
          state.bankLoginPassword = action.payload.bankLoginPassword;
          break;
      }
    },
    handleBankLogin(state, action: PayloadAction<any>) {},
  },
});

export const { updateForm, handleBankLogin } = userSlice.actions;

export const userInputReducer = userSlice.reducer;
