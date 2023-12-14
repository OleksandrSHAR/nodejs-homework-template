import express from "express";
import authController from "../../controllers/auth-controller.js";
import { authenticate, upload, isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  userLoginShema,
  userRegisterShema,
  userVerifyShema,
} from "../../models/User.js";
const authRouter = express.Router();

authRouter.post(
  "/register",
  upload.single("avatarURL"),
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
authRouter.get("/verify/:verificationToken", authController.verify);

authRouter.post(
  "/verify",
  isEmptyBody,
  validateBody(userVerifyShema),
  authController.resendVerify
);

authRouter.patch(
  "/avatars",
  upload.single("avatarURL"),
  authenticate,
  authController.updateAvatar
);
authRouter.get("/current", authenticate, authController.getCurrent);
authRouter.post("/logout", authenticate, authController.logout);
export default authRouter;
