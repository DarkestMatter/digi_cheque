import { RequestHandler } from "express";
import { createChequeModel } from "../../model/createcheque/createchequerequest";

export const getchequehistory: RequestHandler = async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new Error("Invalid request");
    }
    const checkhistory = await createChequeModel().find({
      userid: req.params.id,
    });
    if (!checkhistory.length) {
      res.status(204).json({
        success: true,
        message: `No checkhistory found with the id of ${req.params.id}`,
      });
    }
    res.status(200).json({
      success: true,
      data: checkhistory,
    });
  } catch (err) {
    console.log(err);
  }
};
