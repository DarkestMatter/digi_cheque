import { Router } from "express";
import { bankUserLogin } from "../controller/bank/login/bankUserLogin";
import { getUserDetails } from "../controller/login/getUserDetails";
import { createchequerequest } from "../controller/createcheque/createchequerequest";
import { getchequhistory } from "../controller/createcheque/getchequhistory";

export const router = Router();

router.post("/getUserLogin", (req, res, next) => {
  getUserDetails(req, res, next);
});
router.post("/bankUserLogin", (req, res, next) => {
  bankUserLogin(req, res, next);
});
router.post("/createcheque", (req, res, next) => {
  createchequerequest(req, res, next);
});
router.post("/getchequhistory/:id", (req, res, next) => {
  getchequhistory(req, res, next);
});
