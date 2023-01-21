import { createSelector } from "reselect";
import { getLoggedInUserEmailSelector } from "./getLoggedInUserEmailSelector";

export const getLoggedInUserInitialSelector = createSelector(
  getLoggedInUserEmailSelector,
  (user) => {
    return (user && user.slice(0, 1))?.toUpperCase() || "";
  }
);
