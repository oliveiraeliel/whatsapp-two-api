import { Request, Response } from "express";
import { SendMessageUseCase } from "./SendMessageUseCase";

class SendMessageController {
  async handle(request: Request, response: Response) {
    const { members, messages } = request.body;

    const sendMessageUseCase = new SendMessageUseCase();

    const Message = await sendMessageUseCase.execute({
      members,
      messages,
    });

    return response.json(Message);
  }
}

export { SendMessageController };
