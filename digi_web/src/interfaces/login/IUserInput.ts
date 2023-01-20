import { IAuthenticationDetails } from "./authenticationDetails";

export interface IUserInput {
  userName?: string;
  userId?: string;
  userEmail?: string;
  userMobile?: string;
  userPwd?: string;
  loginMsg?: String;
  bankLoginUserName?: string;
  bankLoginPassword?: string;
  bankLoginStatus?: string;
  authenticationDetails?: IAuthenticationDetails
}
