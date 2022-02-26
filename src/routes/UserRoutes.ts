import express from "express";
import mongoose from "mongoose";
import IUser from "../models/User";
const User = require("../models/User");

const route = express.Router();

route.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user: IUser = { username, password };
  const verify = await User.findOne({ username: username });
  if (verify) {
    res.status(409).json({ msg: "This username is unavailable" });
    return;
  }
  try {
    await User.create(user);
    res.status(200).json({ msg: "The user has been created" });
  } catch (error) {
    res.status(500).json(error);
  }
});

interface ILogin {
  username: string;
  password: string;
  _id: mongoose.Schema.Types.ObjectId;
  __v: number;
}

route.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user: IUser = { username, password };

  try {
    const loginVerify: ILogin = await User.findOne(user);
    if (!loginVerify) {
      res.status(422).json({ status: "422" });
      return;
    }
    res
      .status(200)
      .json({ user: loginVerify });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = route;
