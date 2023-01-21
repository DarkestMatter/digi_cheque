import { Router } from "express";
import { userAuthentication } from "../controller/authentication/userAuthentication";
import { bankUserLogin } from "../controller/bank/login/bankUserLogin";
import { getChequeDetails } from "../controller/cheque/getChequeDetails";
import { getTansChequeDetails } from "../controller/cheque/getTansChequeDetails";
import { createchequerequest } from "../controller/createcheque/createchequerequest";
import { getchequehistory } from "../controller/createcheque/getchequehistory";
import { userlogin } from "../controller/login/userlogin";
import { bankDetails } from "../controller/reciepent/BankDetails";
import { verifyOtp } from "../controller/reciepent/verifyOtp";

export const router = Router();

router.post("/bankUserLogin", (req, res, next) => {
  bankUserLogin(req, res, next);
});
router.post("/authorization", (req, res, next) => {
  userAuthentication(req, res, next);
});
router.post("/getChequeDetails", (req, res, next) => {
  getChequeDetails(req, res, next);
});
router.post("/createcheque", (req, res, next) => {
  createchequerequest(req, res, next);
});
router.post("/getchequehistory/:id", (req, res, next) => {
  getchequehistory(req, res, next);
});
router.post("/userLogin", (req, res, next) => {
  userlogin(req, res, next);
});
router.post("/bankDetails", (req, res, next) => {
  bankDetails(req, res, next);
});
router.post("/verifyOtp", (req, res, next) => {
  verifyOtp(req, res, next);
});
router.post("/getTansChequeDetails", (req, res, next) => {
  getTansChequeDetails(req, res, next);
});
