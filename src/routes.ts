import { Router } from "express";
import { CreateMessageController } from "./createMessage/CreateMessageController";
import { CreateUserController } from "./createUser/CreateUserController";
import { LoginController } from "./login/LoginController";

const createUserController = new CreateUserController();
const loginController = new LoginController();

const createMessageController = new CreateMessageController();

const router = Router();

router.post("/user/sign-up", createUserController.handle);
router.post("/user/login", loginController.handle);

router.post("/message/", createMessageController.handle);

export { router };
