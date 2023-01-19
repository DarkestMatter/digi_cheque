import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../../interfaces/login/initialState";

export const userSlice = createSlice({
  name: "userDetail",
  initialState: initialState,
  reducers: {
    addUserDetail: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { addUserDetail } = userSlice.actions;

export const userReducer = userSlice.reducer;
