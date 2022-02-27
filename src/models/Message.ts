import { Schema, model } from "mongoose";

interface IMessage {
  textMessage: string;
  to: string
  from: string
  groupMessage: boolean;
}

const MessageSchema = new Schema<IMessage>(
  {
    textMessage: { type: String, required: true, trim: true },
    to: {type:String, required:true},
    from: {type:String, required:true},
    groupMessage: { type: Boolean, require: true },
  },
  {
    timestamps: true,
  }
);

export const Message = model<IMessage>("Message", MessageSchema);
