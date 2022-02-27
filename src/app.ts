import "dotenv/config";
import mongoose from "mongoose";

import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({ status: "Error", message: error.message });
  }
);

mongoose
  .connect(process.env.BD_URL)
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(5000, () => console.log(`http://localhost:5000`));
  })
  .catch((err) => console.log(err));
