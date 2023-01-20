export interface ICreatechequerequest{
    name:string,
    userid: string,
    transactionId:string,
    amount:number
    mobileNo:number
    chequeStatus:string
    bankName:string
    chequeClearanceDate:string
    createdDate:Date
    updatedDate:Date
}