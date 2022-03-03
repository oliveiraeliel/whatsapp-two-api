import { Router } from "express";
import { SendMessageController } from "./useCases/sendMessage/SendMessageController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { LoginController } from "./useCases/login/LoginController";
import { GetMessageController } from "./useCases/getMessage/GetMessageController";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";

const createUserController = new CreateUserController();
const loginController = new LoginController();

const sendMessaeController = new SendMessageController();
const getMessageController = new GetMessageController();

const router = Router();

router.post("/user/sign-up", createUserController.handle);
router.post("/user/login", loginController.handle);

router.post("/message/", sendMessaeController.handle);
router.get("/message/:member", getMessageController.handle);
// router.get("/message/:id/", getMessageController.handleGetAllMessages);

router.get("/message", ensureAuthentication, (request, response) => {
  return response.json([{ a: "adfasd" }]);
});

export { router };
