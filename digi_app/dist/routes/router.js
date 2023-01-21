"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userAuthentication_1 = require("../controller/authentication/userAuthentication");
const bankUserLogin_1 = require("../controller/bank/login/bankUserLogin");
const getChequeDetails_1 = require("../controller/cheque/getChequeDetails");
const getTansChequeDetails_1 = require("../controller/cheque/getTansChequeDetails");
const createchequerequest_1 = require("../controller/createcheque/createchequerequest");
const getchequehistory_1 = require("../controller/createcheque/getchequehistory");
const userlogin_1 = require("../controller/login/userlogin");
const BankDetails_1 = require("../controller/reciepent/BankDetails");
const verifyOtp_1 = require("../controller/reciepent/verifyOtp");
exports.router = (0, express_1.Router)();
exports.router.post("/bankUserLogin", (req, res, next) => {
    (0, bankUserLogin_1.bankUserLogin)(req, res, next);
});
exports.router.post("/authorization", (req, res, next) => {
    (0, userAuthentication_1.userAuthentication)(req, res, next);
});
exports.router.post("/getChequeDetails", (req, res, next) => {
    (0, getChequeDetails_1.getChequeDetails)(req, res, next);
});
exports.router.post("/createcheque", (req, res, next) => {
    (0, createchequerequest_1.createchequerequest)(req, res, next);
});
exports.router.post("/getchequehistory/:id", (req, res, next) => {
    (0, getchequehistory_1.getchequehistory)(req, res, next);
});
exports.router.post("/userLogin", (req, res, next) => {
    (0, userlogin_1.userlogin)(req, res, next);
});
exports.router.post("/bankDetails", (req, res, next) => {
    (0, BankDetails_1.bankDetails)(req, res, next);
});
exports.router.post("/verifyOtp", (req, res, next) => {
    (0, verifyOtp_1.verifyOtp)(req, res, next);
});
exports.router.post("/getTansChequeDetails", (req, res, next) => {
    (0, getTansChequeDetails_1.getTansChequeDetails)(req, res, next);
});
