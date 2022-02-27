import { Router } from "express";
import { CreateUserController } from "./createUser/CreateUserController";
import { LoginController } from "./login/LoginController";

const createUserController = new CreateUserController();
const loginController = new LoginController();

const router = Router();

router.post("/user/sign-up", createUserController.handle);
router.post("/user/login", loginController.handle);

export { router };
