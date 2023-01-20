import { RequestHandler } from "express";
import { IUserDetail } from "../../interface/login/IUserDetails";
import { IMailInterface } from "../../interface/mail/IMailInterface";
import { userDetailModel } from "../../model/login/userDetailsModel";
import { mailController } from "../mail/mailController";

export const userlogin: RequestHandler = (req, res, next) => {
  try {
    userDetailModel().find(
      { userEmail: req.body?.userEmail },
      (err: Error, result: IUserDetail[]) => {
        if (!err) {
          if (result[0]?.userPwd === req.body?.userPwd) {
            const mailBody: IMailInterface = {
              mailSubject: "Login Successfull",
              mailText: "Login Successfull",
              userEmail: req.body.userEmail,
            };
            mailController(mailBody);
            res.json({ status: true, msg: "Login Successful" });
          } else {
            res.json({ status: false, msg: "Incorrect Email/Password" });
          }
        } else {
          res.json("some error occurred");
        }
      }
    );
  } catch (err) {}
};
