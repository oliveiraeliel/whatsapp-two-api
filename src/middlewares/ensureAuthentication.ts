import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import "dotenv/config";

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  const [, token] = authToken.split(" ");
  try {
    verify(token, process.env.UUID_KEY);
    return next();
  } catch (error) {
    return response.status(401).json({ message: "Token invalid" });
  }
}
