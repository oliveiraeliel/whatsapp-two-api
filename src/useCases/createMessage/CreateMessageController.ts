import { Request, Response } from "express";
import { CreateMessageUse } from "./CreateMessageUse";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { textMessage, to, from, groupMessage } = request.body;

    const createMessageUse = new CreateMessageUse();

    const message = await createMessageUse.execute({
      textMessage,
      to,
      from,
      groupMessage,
    });

    return response.json(message);
  }
}

export { CreateMessageController };
