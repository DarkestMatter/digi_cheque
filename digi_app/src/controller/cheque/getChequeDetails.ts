import { RequestHandler } from "express";
import { createChequeModel } from "../../model/createcheque/createchequerequest";

export const getChequeDetails: RequestHandler = (req, res, next) => {
  try {
    createChequeModel().find({ userid: req.body.id,}, (err: Error, result: any) => {
      if (!err) {
        res.status(200).json(result);
      } else {
        res.json("some error occurred");
      }
    });
  } catch (err) {
    console.log('Errorn in getChequeDetails',err)
  }
};
