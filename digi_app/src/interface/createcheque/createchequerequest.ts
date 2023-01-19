export interface ICreatechequerequest{
    name:string,
    userid: string,
    transactionId:string,
    amount:number
    mobileNo:number
    chequeStatus:string
    bankName:string
    checkClearanceDate:string
    createdDate:Date
    updatedDate:Date
}