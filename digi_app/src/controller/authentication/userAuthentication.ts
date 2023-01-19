import { RequestHandler } from "express";
import { IUserDetail } from "../../interface/login/IUserDetails";
import { userDetailModel } from "../../model/login/userDetailsModel";

const responce = {
    chequeID : 1234,
    isAuthorize : true
}

export const userAuthentication: RequestHandler = (req, res, next) => {
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
