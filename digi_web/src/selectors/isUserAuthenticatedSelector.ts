import { RootState } from "../store";

export const isUserAuthenticatedSelector = (state: RootState) =>
  state.form.authenticationDetails?.isAuthenticated;
