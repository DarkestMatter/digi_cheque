import { takeLatest } from "redux-saga/effects";
import { getProfileDetailsRequest, handleCreateChequeRequest } from "./CreateCheque";
import { getProfileDetails } from "./saga/getProfileDetails";
import { handleBankDetailsRequest } from "./reciepent";
import { handleCreateCheque } from "./saga/handleCreateCheque";

export const digiChequeSagas = function* watcher(){
    yield takeLatest(handleCreateChequeRequest.type,handleCreateCheque)
    yield takeLatest(getProfileDetailsRequest.type,getProfileDetails)
    yield takeLatest(handleBankDetailsRequest.type,handleBankDetailsRequest)
}