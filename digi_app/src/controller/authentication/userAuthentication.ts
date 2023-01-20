import { RequestHandler } from "express";
import { createChequeModel } from "../../model/createcheque/createchequerequest";
import { sendEmail } from "../email/sendEmail";
export const userAuthentication: RequestHandler = async (req, res, next) => {
  try {
    const filter = { transactionId: req.body.transactionId };
    const update = { chequeStatus: "Authorized" };
    let response = await createChequeModel().findOneAndUpdate(filter, update, {
      new: true,
    });
    
    if (response) {
      const emailObj = {
        toEmail: req.body.emailId,
        subject: "Cheque Authorization",
        text: "Congratulation .......",
      };
      sendEmail(emailObj).then((result) => {
        if (result) {
          res.status(200).json(response);
        }else{
          res.status(204).json({
            success: false,
            message: "Some error",
          });
        }
      });
    } else {
      res.status(204).json({
        success: false,
        message: "Wrong transaction id",
      });
    }
  } catch (err) {}
};
