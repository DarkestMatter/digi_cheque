import { Router } from "express";
import { bankUserLogin } from "../controller/bank/login/bankUserLogin";
import { getUserDetails } from "../controller/login/getUserDetails";

export const router = Router();

router.post("/getUserLogin", (req, res, next) => {
  getUserDetails(req, res, next);
});
router.post("/bankUserLogin", (req, res, next) => {
  bankUserLogin(req, res, next);
});
