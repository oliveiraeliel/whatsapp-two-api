import { Request, Response } from "express";
import { SendMessageUse } from "./SendMessageUse";

class SendMessageController {
  async handle(request: Request, response: Response) {
    const { members, messages } = request.body;

    const sendMessageUse = new SendMessageUse();

    const Message = await sendMessageUse.execute({
      members,
      messages,
    });

    return response.json(Message);
  }
}

export { SendMessageController };
