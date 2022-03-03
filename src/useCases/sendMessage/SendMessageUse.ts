import { Chat } from "../../models/Chat";

interface IMessageArray {
  sender: string;
  message: string;
}

interface ISendMessage {
  members: Array<string>;
  messages: IMessageArray;
}

class SendMessageUse {
  async execute({ members, messages }: ISendMessage) {
    const chat = await Chat.findOneAndUpdate(
      { members: members.sort },
      {
        $push: {
          messages: { sender: messages.sender, message: messages.message },
        },
      }
    );

    if (chat === null) {
      console.log("asdf");
      const createChat = await Chat.create({
        members: members,
        messages: { sender: messages.sender, message: messages.message },
      });
      return createChat;
    }

    return chat;
  }
}

export { SendMessageUse };
