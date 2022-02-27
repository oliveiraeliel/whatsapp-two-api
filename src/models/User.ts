import { Schema, model } from "mongoose";

export default interface IUser {
  username: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = model<IUser>("User", UserSchema);
