import { RequestHandler } from "express";
import { IBankLogin } from "../../../interface/bank/login/IBankLogin";
import { bankLoginModel } from "../../../model/bank/login/bankLoginModel";

export const bankUserLogin: RequestHandler = (req, res, next) => {
  try {
    bankLoginModel().find(
      { userName: req.body.username },
      (err: Error, result: IBankLogin[]) => {
        if (!err) {
          if (!result.length) {
            res.json({
              status: "failed",
            });
          } else {
            const userObj = result.find(
              (e) =>
                e.userName === req.body.username &&
                e.password === req.body.password
            );
            if (userObj) {
              res.json({
                status: "success",
              });
            } else {
              res.json({
                status: "failed",
              });
            }
          }
        } else {
          res.json("some error occurred");
        }
      }
    );
  } catch (err) {}
};
