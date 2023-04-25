import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import homeRoute from "./routes/homeRoute.js";
import viewRoute from "./routes/viewRoute.js";
import SingleRecordRoute from "./routes/SingleRecordPage.js";

mongoose.set("strictQuery", false);

const app = express();
mongoose.connect("mongodb://localhost:27017/billDB");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  mobile: String,
  billing: String,
  postalCode: String,
  invoice: String,
  corporateName: String,
  fileName: String,
  path: String,
});
const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json());
app.use("/home", homeRoute);
app.use("/view", viewRoute);
app.use("/SingleRecord", SingleRecordRoute);

app.listen(5000, function () {
  console.log("server started on port 5000");
});
export { User };
