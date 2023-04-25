import express from "express";
import { User } from "../server.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send(allUser);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await User.deleteOne({ id: id });
    res.send({ data: "deleted" });
  } catch (err) {
    console.log(err);
    res.send({ error: "An error occurred while deleting the user" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const name = req.body.name;
    const updatedDoc = await User.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.send(updatedDoc);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/:nam", function (req, res) {
  const customView = req.params.nam;
  console.log(customView, "hello");
  User.findOne({ name: customView })
    .then((foundUser) => {
      if (foundUser) {
        res.send({
          foundUser,
        });
      } else {
        res.send(`No user found with name "${customView}"`);
      }
    })
    .catch((err) => {
      console.log(err);
      res.send("An error occurred while retrieving the user.");
    });
});

export default router;
