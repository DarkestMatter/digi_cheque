export interface IBankDetails {
  userName: string | null;
  phoneNumber: number | null;
  accountNumber: number | null;
  IFSCCode: string | null;
  email: string | null;
  transId: number | null;
}

export interface IOtpVerification {
  Failed: boolean;
  success: boolean;
  otp: number | null;
}

export interface ITransId {
  transId: string | undefined;
}
