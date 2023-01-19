import { all } from "redux-saga/effects";

export function* rootSaga(): Iterator<{}> {
  yield all([]); //fork all sagas here
}
