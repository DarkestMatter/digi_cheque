"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const bankUserLogin_1 = require("../controller/bank/login/bankUserLogin");
const getUserDetails_1 = require("../controller/login/getUserDetails");
const userAuthentication_1 = require("../controller/authentication/userAuthentication");
const getChequeDetails_1 = require("../controller/cheque/getChequeDetails");
const createchequerequest_1 = require("../controller/createcheque/createchequerequest");
const getchequehistory_1 = require("../controller/createcheque/getchequehistory");
exports.router = (0, express_1.Router)();
exports.router.post("/getUserLogin", (req, res, next) => {
    (0, getUserDetails_1.getUserDetails)(req, res, next);
});
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
