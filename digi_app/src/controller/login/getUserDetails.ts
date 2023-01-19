import { RequestHandler } from "express";
import { IUserDetail } from "../../interface/login/IUserDetails";
import { userDetailModel } from "../../model/login/userDetailsModel";

export const getUserDetails: RequestHandler = (req, res, next) => {
  try {
    userDetailModel().find({}, (err: Error, result: IUserDetail) => {
      if (!err) {
        res.json(console.log(result));
      } else {
        res.json("some error occurred");
      }
    });
  } catch (err) {}
};
