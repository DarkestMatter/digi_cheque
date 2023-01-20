import { setProfileDetails } from "../CreateCheque";
import { put, select } from "redux-saga/effects";
import { envProp } from "../../services/envProp";
import axios from "axios";
import { getUserInput } from "../../selectors/selectors";
import { IUserInput } from "../../interfaces/login/IUserInput";
import { handleBankLogin } from "../userDetail/userSlice";
export function* handleBankLoginSaga(
  action: ReturnType<typeof handleBankLogin>
) {
  try {
    const formInput: IUserInput = yield select(getUserInput);
    const bankLoginUserName = formInput.bankLoginUserName;
    const bankLoginPassword = formInput.bankLoginPassword;
    const getLoginURL = `${envProp.api}/bankUserLogin`;
    axios
      .post(getLoginURL, {
        username: bankLoginUserName,
        password: bankLoginPassword,
      })
      .then((response) => {
        if (response.data && response.data.status === "success") {
          action.payload.navigate("/auth");
        } else {
        }
      });
  } catch (error) {
    console.log(error);
  }
}
