import { RequestHandler } from "express";
import { IBankLogin } from "../../../interface/bank/login/IBankLogin";
import { bankLoginModel } from "../../../model/bank/login/bankLoginModel";

export const bankUserLogin: RequestHandler = (req, res, next) => {
  try {
    bankLoginModel().find(
      { userName: req.body.username },
      (err: Error, result: IBankLogin[]) => {
        if (!err) {
          res.json(
            result.map((e) => {
              return {
                name: e.userName,
                userId: e.password,
              };
            })
          );
        } else {
          res.json("some error occurred");
        }
      }
    );
  } catch (err) {}
};
