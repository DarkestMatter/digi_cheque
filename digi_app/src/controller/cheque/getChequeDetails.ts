import { RequestHandler } from "express";

const responce = {
    chequeID : 1234,
    isAuthorize : true,
    bankName : 'ICICI Bank',
    userName : 'Bhushan Jire',
    desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    amount : 100000
}

export const getChequeDetails: RequestHandler = (req, res, next) => {
  try {
      const err = false
    // userDetailModel().find({}, (err: Error, result: IUserDetail) => {
      if (!err) {
        res.json(responce);
      } else {
        res.json("some error occurred");
      }
    // });
  } catch (err) {}
};
