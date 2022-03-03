import mongoose from "mongoose";
import { Schema, model } from "mongoose";

interface IRefreshToken {
  expiresIn: number;
  user: Schema.Types.ObjectId;
}

const RefreshTokenSchema = new Schema<IRefreshToken>({
  expiresIn: { type: Number, required: true },

  user: { type: Schema.Types.ObjectId, ref: "user" },
});
