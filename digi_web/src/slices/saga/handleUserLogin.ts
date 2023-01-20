import { call, put, select } from "redux-saga/effects";
import { IUserInput } from "../../interfaces/login/IUserInput";
import { getUserInput } from "../../selectors/selectors";
import api from "../../services";
import {
  handleBankLogin,
  setIsAuthenticated,
  updateForm,
} from "../userDetail/userSlice";
export function* handleUserLoginSaga(
  action: ReturnType<typeof handleBankLogin>
) {
  try {
    const formInput: IUserInput = yield select(getUserInput);
    const userEmail = formInput.userEmail;
    const userPwd = action.payload.userPwd;
    const request: IUserInput = {
      userEmail: userEmail,
      userPwd: userPwd,
    };
    //@ts-ignore
    const response = yield call(api.chequeRequest.userLogin, request);
    if (response && response.data.status) {
      action.payload.navigate("/dashboard");
      yield put(
        setIsAuthenticated({
          isAuthenticated: true,
          loggedInUserEmail: userEmail || "",
        })
      );
    } else {
      const formObj: IUserInput = {};
      formObj["loginMsg" as keyof IUserInput] = response.data.msg;
      yield put(updateForm(formObj));
    }
  } catch (error) {
    console.log(error);
  }
}
