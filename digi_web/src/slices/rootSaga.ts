import { all, fork } from "redux-saga/effects";
import { digiChequeSagas } from "./sagas";

export function* rootSaga(): Iterator<{}> {
  yield all([fork(digiChequeSagas)]); //fork all sagas here
}
