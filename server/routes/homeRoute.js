import express from 'express';
import { User } from "../server.js"
import multer from "multer";

const router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.name);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), function (req, res) {
    const user = new User({
      name: req.body.data.name,
      email: req.body.data.email,
      address: req.body.data.address,
      mobile: req.body.data.mobile,
      billing: req.body.data.billing,
      postalCode: req.body.data.postalCode,
      invoice: req.body.data.invoice,
      corporateName: req.body.data.corporateName,
      Filename: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      data: {
        type: Buffer,
        required: true,
      },
    });
    user.save();
    res.send(user);
  });
  export default router;