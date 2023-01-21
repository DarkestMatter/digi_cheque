import { RequestHandler } from "express";
import { IUserDetail } from "../../interface/login/IUserDetails";
import { IMailInterface } from "../../interface/mail/IMailInterface";
import { createChequeModel } from "../../model/createcheque/createchequerequest";
import { userDetailModel } from "../../model/login/userDetailsModel";
import { mailController } from "../mail/mailController";
export const userAuthentication: RequestHandler = async (req, res, next) => {
  try {
    const filter = { transactionId: req.body.transactionId };
    const update = { chequeStatus: "Authorized" };
    const response = await createChequeModel().findOneAndUpdate(
      filter,
      update,
      {
        new: true,
      }
    );

    if (response) {
      const userNameResponse = await userDetailModel().findOne(
        { userEmail: response.userid },
        (err: Error, result: IUserDetail) => {
          const linkText = `http://localhost:3000/reciepent/${response?.transactionId}`;
          const mailBody: IMailInterface = {
            mailSubject: "Accept your Digital Cheque",
            mailText: `Dear Customer \r\n \r\n${result?.userEmail} has sent you a Digital Cheque of Amount ${response?.amount} from ${response?.bankName} \r\nPlease click link to complete acceptance of your digital cheque. \r\n\r\n${linkText}\r\n \r\nBest Regards \r\nDigi Cheque \r\n\r\n\r\n\r\n--This is a system generated mail--`,
            userEmail: response.email,
          };
          res.status(200).json(response);
          mailController(mailBody);
        }
      );
    } else {
      res.status(204).json({
        success: false,
        message: "Wrong transaction id",
      });
    }
  } catch (err) {}
};
