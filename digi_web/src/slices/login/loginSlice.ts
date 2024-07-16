import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {
    addLogin: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
  },
});

export const { addLogin } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
