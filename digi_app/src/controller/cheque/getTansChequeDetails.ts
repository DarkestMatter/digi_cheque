import { RequestHandler } from "express";
import { IMailInterface } from "../../interface/mail/IMailInterface";
import { createChequeModel } from "../../model/createcheque/createchequerequest";
import { mailController } from "../mail/mailController";
export const getTansChequeDetails: RequestHandler = (req, res, next) => {
  try {
    createChequeModel().find(
      { transactionId: req.body.transId },
      (err: Error, result: any) => {
        if (!err) {
          if (result.length) {
            res.status(200).json({
              success: true,
              data: result[0],
            });
          } else {
            res.json({
              status: "failed",
            });
          }
        } else {
          res.json("some error occurred");
        }
      }
    );
  } catch (err) {
    console.log("Errorn in getChequeDetails", err);
  }
};
