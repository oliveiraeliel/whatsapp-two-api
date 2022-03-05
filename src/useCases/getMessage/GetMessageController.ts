import { Request, Response } from "express";
import { GetMessageUseCase } from "./GetMessageUseCase";

class GetMessageController {
  async handle(request: Request, response: Response) {
    const member = request.params.member;
    const getMessageUseCase = new GetMessageUseCase();
    const message = await getMessageUseCase.getChatMessage(member);
    return response.json(message);
  }
}

export { GetMessageController };
