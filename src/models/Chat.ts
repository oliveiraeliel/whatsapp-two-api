import { Schema, model } from "mongoose";

interface IChat {
  members: [];
  messages: [];
}

const ChatSchema = new Schema<IChat>({
  members: { type: [] },
  messages: [
    {
      sender: String,
      message: String,
    },
    { createdAt: 'created_at' }
  ],
});

export const Chat = model<IChat>("Chat", ChatSchema);
