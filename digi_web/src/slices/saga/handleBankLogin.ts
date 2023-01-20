import { setProfileDetails } from "../CreateCheque";
import { call, put, select } from "redux-saga/effects";
import { envProp } from "../../services/envProp";
import axios from "axios";
import { getUserInput } from "../../selectors/selectors";
import { IUserInput } from "../../interfaces/login/IUserInput";
import { handleBankLogin, updateLoginStatus } from "../userDetail/userSlice";
import api from "../../services";
import { IPostBankLogin } from "../../interfaces/login/IPostBankLogin";
export function* handleBankLoginSaga(
  action: ReturnType<typeof handleBankLogin>
) {
  try {
    const formInput: IUserInput = yield select(getUserInput);
    const bankLoginUserName = formInput.bankLoginUserName;
    const bankLoginPassword = formInput.bankLoginPassword;
    // const getLoginURL = `${envProp.api}/bankUserLogin`;
    const request: IPostBankLogin = {
      username: bankLoginUserName || "",
      password: bankLoginPassword || "",
    };
    //@ts-ignore
    const response = yield call(api.chequeRequest.bankUserLogin, request);
    if (response && response.data.status === "success") {
      yield put(updateLoginStatus("success"));
      action.payload.navigate("/auth");
    } else {
      yield put(updateLoginStatus("failed"));
    }
  } catch (error) {
    console.log(error);
  }
}
