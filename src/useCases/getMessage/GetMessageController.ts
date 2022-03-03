import { Request, Response } from "express";
import { GetMessageUse } from "./GetMessageUse";

class GetMessageController {
  async handle(request: Request, response: Response) {
    const member = request.params.member;
    const getMessageUse = new GetMessageUse();
    const message = await getMessageUse.getChatMessage(member);
    return response.json(message);
  }
}

export { GetMessageController };
