import axios from "axios";
import { ICreateChequeRequest } from "../../interfaces/Cheque/CreateChequeRequest";
import { envProp } from "../envProp";

class cheque {
  public createCheque = (payload: ICreateChequeRequest) => {
    return axios.post(`${envProp.api}/createcheque`, payload);
  };
  public getChequehistory = (id:number| string) => {
    return axios.post(`${envProp.api}/getchequehistory/${id}`);
  };
}

export { cheque };
