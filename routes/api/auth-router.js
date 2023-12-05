import express from "express";
import authController from "../../controllers/auth-controller.js";
import { authenticate, isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userLoginShema, userRegisterShema } from "../../models/User.js";
const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(userRegisterShema),
  authController.register
);
authRouter.post(
  "/login",
  isEmptyBody,
  validateBody(userLoginShema),
  authController.login
);
authRouter.get("/current", authenticate, authController.getCurrent);
authRouter.post("/signout", authenticate, authController.signout);
export default authRouter;
