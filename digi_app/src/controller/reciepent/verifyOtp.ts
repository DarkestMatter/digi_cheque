import { RequestHandler } from "express";
import { ICreatechequerequest } from "../../interface/createcheque/createchequerequest";
import { IUserDetail } from "../../interface/login/IUserDetails";
import { IMailInterface } from "../../interface/mail/IMailInterface";
import { createChequeModel } from "../../model/createcheque/createchequerequest";
import { userDetailModel } from "../../model/login/userDetailsModel";
import { mailController } from "../mail/mailController";

export const verifyOtp: RequestHandler = (req, res, next) => {
  try {
    createChequeModel().find(
      { transactionId: req.body.transId },
      (err: Error, result: ICreatechequerequest[]) => {
        if (!err) {
          if (!result.length) {
            res.json({
              status: "failed",
            });
          } else {
            if (true) {
              //result[0]?.otp && result[0]?.otp === req.body.otp
              const mailBody: IMailInterface = {
                mailSubject: "Digi Cheque - Verified OTP",
                mailText:
                  "we’d like to inform you that we have verified your email",
                userEmail: "sachinsj350@gmail.com", //result.email
              };
              mailController(mailBody);
              res.json({
                status: "success",
              });
            } else {
              res.json({
                status: "failed",
              });
            }
          }
        } else {
          res.json("some error occurred");
        }
      }
    );
  } catch (err) {}
};
