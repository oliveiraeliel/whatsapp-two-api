import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";
import { GenerateAuthToken } from "../generateAuthToken/generateAuthToken";

class LoginController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const loginUseCase = new LoginUseCase();

    const user = await loginUseCase.execute({ username, password });
    const _id = user._id.toString();
    const generateAuthToken = new GenerateAuthToken();
    const token = await generateAuthToken.generate(_id);
    console.log(token);

    return response.json({ token: token });
  }
}

export { LoginController };
