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
        console.log(result);
        if (!err) {
          if (!result.length) {
            res.json({
              status: "failed",
            });
          } else {
            if (true) {
              console.log(result);
              const mailBody: IMailInterface = {
                mailSubject: "Digi Cheque - Verified OTP",
                mailText:
                  "we’d like to inform you that we have verified your email",
                userEmail: result[0]?.email,
              };
              mailController(mailBody);
              res.json({
                status: true,
              });
            } else {
              res.json({
                status: false,
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
