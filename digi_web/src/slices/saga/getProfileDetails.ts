import { setProfileDetails } from "../CreateCheque"
import { put } from "redux-saga/effects";
export function* getProfileDetails(){
    try {
        const result = {
            name: 'Mahesh Deshmukh',
            email: 'mahesh@gmail.com',
            mobileNumber: '000000000'
        }
        yield put(setProfileDetails(result))
    } catch (error) {
        console.log(error);
        
    }
}