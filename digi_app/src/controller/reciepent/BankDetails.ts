import { RequestHandler } from "express";
import { ICreatechequerequest } from "../../interface/createcheque/createchequerequest";
import { IMailInterface } from "../../interface/mail/IMailInterface";
import { createChequeModel } from "../../model/createcheque/createchequerequest";
import { mailController } from "../mail/mailController";
// Function to generate OTP
function generateOTP() {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}
export const bankDetails: RequestHandler = (req, res, next) => {
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
            if (result.length) {
              const otp = generateOTP();
              const mailBody: IMailInterface = {
                mailSubject: "Your One Time Password",
                mailText: otp,
                userEmail: "sachinsj350@gmail.com", //result.email
              };
              mailController(mailBody);
              const filter = { transactionId: req.body.transId };
              const update = { chequeStatus: "Initiated ", otp: otp };
              createChequeModel().findOneAndUpdate(filter, update);
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
