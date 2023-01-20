import nodemailer from "nodemailer";
interface IEmail {
  toEmail: string;
  subject: string;
  text: string;
}

export const sendEmail = async (req: IEmail) => {
  try {
    const mailOptions = {
      from: "bhushanjire@gmail.com",
      to: req.toEmail,
      subject: req.subject,
      text: req.text,
    };
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: testAccount.user,
            pass:testAccount.pass
        }
    });

   const result = await transporter.sendMail(mailOptions);
   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
   return result 
  } catch (err) {}
};
