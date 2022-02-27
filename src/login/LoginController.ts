import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

class LoginController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const loginUseCase = new LoginUseCase();

    const user = await loginUseCase.execute({ username, password });

    return response.json(user);
  }
}

export { LoginController };
