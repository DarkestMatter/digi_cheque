import mongoose, { ConnectOptions } from "mongoose";

// const get_line_no = () => {
//   var obj = {};
//   Error.captureStackTrace(obj, get_line_no);
//   return obj.stack;
// };

export const connect_db = () => {
  const uri =
    "mongodb+srv://digi_cheque:Syne123@cluster0.tjhxona.mongodb.net/digi_cheque?retryWrites=true&w=majority";
  try {
    //mongoose.connect("mongodb://127.0.0.1/digi_db");
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    mongoose.Promise = require("bluebird");
  } catch (err) {
    console.log(err);
  }
};
