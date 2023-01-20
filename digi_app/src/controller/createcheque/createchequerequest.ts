import { RequestHandler } from "express";
import { createChequeModel } from "../../model/createcheque/createchequerequest";
import { v4 as uuidv4 } from 'uuid';

export const createchequerequest: RequestHandler = async (req, res, next) => {
  try {
    req.body.transactionId = uuidv4();
    req.body.chequeStatus = "Open";
    req.body.createdDate = Date.now();
    req.body.updatedDate = Date.now();
    const checkData = await createChequeModel().create(req.body);
    res.status(200).json({
      success: true,
      data: checkData,
    });
  } catch (err) {
    console.log(err);
    
  }
};
