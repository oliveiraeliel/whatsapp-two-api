import { User } from "../models/User";
import { compare } from "bcryptjs";

interface ILoginRequest {
  username: string;
  password: string;
}

class LoginUseCase {
  async execute({ username, password }: ILoginRequest) {
    const userExists = await User.findOne({ username: username });

    if (!userExists) {
      throw new Error("Username or password is incorrect!");
    }

    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new Error("Username or password is incorrect!");
    }

    return userExists;
  }
}

export { LoginUseCase };
