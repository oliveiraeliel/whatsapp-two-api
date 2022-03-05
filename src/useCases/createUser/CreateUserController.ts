import { Request, Response } from "express";
import { GenerateAuthToken } from "../generateAuthToken/generateAuthToken";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute({ username, password });

    const _id = user._id.toString();
    const generateAuthToken = new GenerateAuthToken();
    const token = await generateAuthToken.generate(_id);

    return response.json({ token: token, user: user.username });
  }
}

export { CreateUserController };
