import { Schema, model } from "mongoose";

export default interface IUser {
  username: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<IUser>("User", UserSchema);

module.exports = User;
