"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const getUserDetails_1 = require("../controller/login/getUserDetails");
exports.router = (0, express_1.Router)();
exports.router.post("/getUserLogin", (req, res, next) => {
    (0, getUserDetails_1.getUserDetails)(req, res, next);
});
