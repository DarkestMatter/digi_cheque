import mongoose from "mongoose";

// const get_line_no = () => {
//   var obj = {};
//   Error.captureStackTrace(obj, get_line_no);
//   return obj.stack;
// };

export const connect_db = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1/digi_db");
    mongoose.Promise = require("bluebird");
  } catch (err) {
    console.log(err);
  }
};
