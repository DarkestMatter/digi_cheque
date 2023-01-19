"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect_db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// const get_line_no = () => {
//   var obj = {};
//   Error.captureStackTrace(obj, get_line_no);
//   return obj.stack;
// };
const connect_db = () => {
    try {
        mongoose_1.default.connect("mongodb://127.0.0.1/digi_db");
        mongoose_1.default.Promise = require("bluebird");
    }
    catch (err) {
        console.log(err);
    }
};
exports.connect_db = connect_db;
