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
        toEmail: "bhushanjire@gmail.com",
        subject: "test email",
        text: "Congratulation ....... test body",
      };
      sendEmail(emailObj).then((result) => {
        if (result) {
          res.status(200).json(response);
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
