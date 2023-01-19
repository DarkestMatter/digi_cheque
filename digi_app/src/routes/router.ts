import { Router } from "express";
import { getUserDetails } from "../controller/login/getUserDetails";

export const router = Router();

router.post("/getUserLogin", (req, res, next) => {
  getUserDetails(req, res, next);
});
