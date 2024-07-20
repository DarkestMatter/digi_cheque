import { loginReducer } from "./login/loginSlice";
import { scripDataReducer } from "./scripFeed/scripFeedSlice";

export const reducers = {
  login: loginReducer,
  scripData: scripDataReducer,
};
