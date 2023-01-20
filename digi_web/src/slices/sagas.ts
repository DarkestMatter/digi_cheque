import { takeLatest } from "redux-saga/effects";
import { getProfileDetailsRequest, handleCreateChequeRequest } from "./CreateCheque";
import { getProfileDetails } from "./saga/getProfileDetails";
import { handleCreateCheque } from "./saga/handleCreateCheque";

export const digiChequeSagas = function* watcher(){
    yield takeLatest(handleCreateChequeRequest.type,handleCreateCheque)
    yield takeLatest(getProfileDetailsRequest.type,getProfileDetails)
}