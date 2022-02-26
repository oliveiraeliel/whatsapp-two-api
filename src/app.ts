require("dotenv").config();

import mongoose from "mongoose";

import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const UserRoutes = require("./routes/UserRoutes");

app.use("/user", UserRoutes);

mongoose
  .connect(process.env.BD_URL)
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(5000, () => console.log(`http://localhost:5000`));
  })
  .catch((err) => console.log(err));
