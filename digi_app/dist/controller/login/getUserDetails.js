"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetails = void 0;
const userDetailsModel_1 = require("../../model/login/userDetailsModel");
const getUserDetails = (req, res, next) => {
    try {
        (0, userDetailsModel_1.userDetailModel)().find({}, (err, result) => {
            if (!err) {
                res.json(result.map((e) => {
                    return {
                        name: e.userName,
                        userId: e.userId,
                    };
                }));
            }
            else {
                res.json("some error occurred");
            }
        });
    }
    catch (err) { }
};
exports.getUserDetails = getUserDetails;
