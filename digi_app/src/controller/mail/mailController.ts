import nodemailer from "nodemailer";
import { IMailInterface } from "../../interface/mail/IMailInterface";

export const mailController = (mailBody: IMailInterface) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAILSEND,
      pass: process.env.EMAILPASSWORD,
    },
  });
  let mailDetails = {
    from: "digicheque.official@gmail.com",
    to: mailBody.userEmail as any,
    subject: mailBody.mailSubject,
    text: mailBody.mailText,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};
