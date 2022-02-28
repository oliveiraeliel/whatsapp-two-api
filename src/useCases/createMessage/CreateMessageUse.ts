import { Message } from "../../models/Message";

interface ICreateMessageUse {
  textMessage: string;
  to: string;
  from: string;
  groupMessage: boolean;
}

class CreateMessageUse {
  async execute({ textMessage, to, from, groupMessage }: ICreateMessageUse) {
    const message = await Message.create({
      textMessage: textMessage,
      to: to,
      from: from,
      groupMessage: groupMessage,
    });

    return message;
  }
}

export { CreateMessageUse };
