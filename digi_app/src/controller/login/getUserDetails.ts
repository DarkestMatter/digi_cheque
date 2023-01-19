import { RequestHandler } from "express";
import { IStockList } from "../../interface/login/IUserDetails";
import { stockListModel } from "../../model/login/userDetailsModel";

export const getUserDetails: RequestHandler = (req, res, next) => {
  try {
    stockListModel().find({}, (err: Error, result: IStockList[]) => {
      if (!err) {
        res.json(
          result.map((e) => {
            return {
              name: e.userName,
              userId: e.userId,
            };
          })
        );
      } else {
        res.json("some error occurred");
      }
    });
  } catch (err) {}
};
