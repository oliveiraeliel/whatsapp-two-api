import { Router } from "express";
import { CreateMessageController } from "./useCases/createMessage/CreateMessageController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { LoginController } from "./useCases/login/LoginController";
import { GetMessageController } from "./useCases/getMessage/GetMessageController";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";

const createUserController = new CreateUserController();
const loginController = new LoginController();

const createMessageController = new CreateMessageController();
const getMessageController = new GetMessageController();

const router = Router();

router.post("/user/sign-up", createUserController.handle);
router.post("/user/login", loginController.handle);

router.post("/message/", createMessageController.handle);
router.get("/message/:to/:from", getMessageController.handle);
router.get("/message/:id/", getMessageController.handleGetAllMessages);

router.get("/message", ensureAuthentication, (request, response) => {
  return response.json([{ a: "adfasd" }]);
});

export { router };
