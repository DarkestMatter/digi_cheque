import axios from "axios";
import { put, select } from "redux-saga/effects";
import { IUserInput } from "../../interfaces/login/IUserInput";
import { getUserInput } from "../../selectors/selectors";
import { envProp } from "../../services/envProp";
import { handleBankLogin, updateForm } from "../userDetail/userSlice";
export function* handleUserLoginSaga(
  action: ReturnType<typeof handleBankLogin>
) {
  try {
    const formInput: IUserInput = yield select(getUserInput);
    const userEmail = formInput.userEmail;
    const userPwd = action.payload.userPwd;
    const userLogin = `${envProp.api}/userLogin`;
    axios
      .post(userLogin, {
        userEmail: userEmail,
        password: userPwd,
      })
      .then((response) => {
        if (response.data && response.data.status) {
          action.payload.navigate("/dashboard");
        } else {
          const formObj: IUserInput = {};
          formObj["loginMsg" as keyof IUserInput] = response.data.msg;
          //yield put(updateForm(formObj));
        }
      });
  } catch (error) {
    console.log(error);
  }
}
