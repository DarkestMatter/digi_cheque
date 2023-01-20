import axios from "axios";
import { ICreateChequeRequest } from "../../interfaces/Cheque/CreateChequeRequest";
import { IPostBankLogin } from "../../interfaces/login/IPostBankLogin";
import { IUserInput } from "../../interfaces/login/IUserInput";
import { ICreateChequeRequest,IAuthorizeCheckRequest } from "../../interfaces/Cheque/CreateChequeRequest";
import { envProp } from "../envProp";

class cheque {
  public createCheque = (payload: ICreateChequeRequest) => {
    return axios.post(`${envProp.api}/createcheque`, payload);
  };
  public getChequehistory = (id: number | string) => {
    return axios.post(`${envProp.api}/getchequehistory/${id}`);
  };
  public bankUserLogin = (payload: IPostBankLogin) => {
    return axios.post(`${envProp.api}/bankUserLogin/`, payload);
  };
  public userLogin = (payload: IUserInput) => {
    return axios.post(`${envProp.api}/userLogin/`, payload);
  };
  public authorizedCheck = (payload : IAuthorizeCheckRequest) => {
    return axios.post(`${envProp.api}/authorization`,payload);
  }
}

export { cheque };
