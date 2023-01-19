"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const getUserDetails_1 = require("../controller/login/getUserDetails");
const userAuthentication_1 = require("../controller/authentication/userAuthentication");
const getChequeDetails_1 = require("../controller/cheque/getChequeDetails");
exports.router = (0, express_1.Router)();
exports.router.post("/getUserLogin", (req, res, next) => {
    (0, getUserDetails_1.getUserDetails)(req, res, next);
});
exports.router.post("/authorization", (req, res, next) => {
    (0, userAuthentication_1.userAuthentication)(req, res, next);
});
exports.router.post("/getChequeDetails", (req, res, next) => {
    (0, getChequeDetails_1.getChequeDetails)(req, res, next);
});
