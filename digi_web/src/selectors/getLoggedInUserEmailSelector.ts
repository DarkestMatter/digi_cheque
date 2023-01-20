import { RootState } from "../store";

export const getLoggedInUserEmailSelector = (state: RootState) => {
  return (
    state.form.userEmail ||
    state.form.authenticationDetails?.loggedInUserEmail ||
    ""
  );
};
