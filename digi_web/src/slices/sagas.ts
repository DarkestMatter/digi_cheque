import { takeLatest } from "redux-saga/effects";
import { handleCreateChequeRequest } from "./CreateCheque";
import { handleCreateCheque } from "./saga/handleCreateCheque";

export const digiChequeSagas = function* watcher(){
    yield takeLatest(handleCreateChequeRequest.type,handleCreateCheque)
}