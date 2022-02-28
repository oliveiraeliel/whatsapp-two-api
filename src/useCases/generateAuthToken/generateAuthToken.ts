import { sign } from "jsonwebtoken";
import "dotenv/config";

class GenerateAuthToken {
  async generate(_id: string) {

    const token = sign({}, process.env.UUID_KEY, {
      subject: _id,
      expiresIn: "20s",
    });

    return token;
  }
}

export { GenerateAuthToken };
