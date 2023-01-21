import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";
import { connect_db } from "./db";
import { router } from "./routes/router";
import dotenv from 'dotenv'

const app = express();

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
dotenv.config()
app.use(bodyParser());

app.use(express.static(path.join(__dirname, "../../digi_web/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../digi_web/dist", "index.html"));
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../digi_web/dist", "index.html"));
});

connect_db();

const port = process.env.PORT || 4000;

console.log("connected to DB", port);
app.set("port", port);
app.listen(port);

app.use("/api", router);
