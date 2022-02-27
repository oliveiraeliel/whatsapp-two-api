import { User } from "../models/User";
import { hash } from "bcryptjs";

interface IUserRequest {
  username: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ username, password }: IUserRequest) {
    const userAlreadyExists = await User.findOne({ username: username });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await User.create({
      username: username,
      password: passwordHash,
    });
    return user;
  }
}

export { CreateUserUseCase };
