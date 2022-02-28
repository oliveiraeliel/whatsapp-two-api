import { Message } from "../../models/Message";

interface IExecute {
  to: string;
  from: string;
}

class GetMessageUse {
  async getChatMessage({ to, from }: IExecute) {
    const message = await Message.find({ to: to, from: from });

    if (message === null) {
      throw new Error("This message does not exist");
    }

    return message;
  }

  async getAllMessages(_id: string) {
    let message = await Message.find({ to: _id });

    if (message === []) {
      message = await Message.find({ from: _id });
      if (message === []) {
        throw new Error("Not found");
      }
    }
    return message;
  }
}

export { GetMessageUse };
