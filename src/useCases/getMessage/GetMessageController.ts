import { Request, Response } from "express";
import { GetMessageUse } from "./GetMessageUse";

class GetMessageController {
  async handle(request: Request, response: Response) {
    const to: string = request.params.to;
    const from: string = request.params.from;

    const getMessageUse = new GetMessageUse();

    const message = await getMessageUse.getChatMessage({ to, from });

    return response.json(message);
  }

  async handleGetAllMessages(request: Request, response: Response) {
    const _id: string = request.params.id;

    const getMessageUse = new GetMessageUse();

    const message = await getMessageUse.getAllMessages(_id);

    return response.json(message);
  }
}

export { GetMessageController };
