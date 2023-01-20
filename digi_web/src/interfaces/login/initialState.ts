import { IUserInput } from "./IUserInput";

export const initialState: IUserInput = {
  userName: "",
  userId: "",
  userMobile: undefined,
  userEmail: "",
  bankLoginUserName: "",
  bankLoginPassword: "",
  bankLoginStatus: "",
  authenticationDetails:{
    isAuthenticated: false,
    loggedInUserEmail: null
  }
};
