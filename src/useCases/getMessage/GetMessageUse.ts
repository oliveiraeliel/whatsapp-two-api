import { Chat } from "../../models/Chat";

class GetMessageUse {
  async getChatMessage(member: string) {
    const message = await Chat.find({ members: { $in: [member] } });

    if (message === null) {
      throw new Error("This message does not exist");
    }
    console.log(message);

    return message;
  }
}

export { GetMessageUse };
