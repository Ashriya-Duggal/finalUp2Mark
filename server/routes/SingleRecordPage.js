import express from "express";
import { User } from "../server.js";

const router = express.Router();

router.get("/", function (req, res) {
  res.send("ok");
});

export default router;
