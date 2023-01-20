export interface IBankDetails {
    userName: string  | null;
    phoneNumber: number | null;
    accountNumber: number | null;
    IFSCCode: string | null;
}

export interface IOtpVerification {
  Failed: boolean;
  success: boolean;
  otp: number | null;
}
  