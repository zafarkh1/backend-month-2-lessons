import { Router } from "express";
import {
  authController,
  authPageController,
} from "../controllers/auth.controller.js";
import { userController } from "../controllers/user.controller.js";
import { adminController } from "../controllers/admin.controller.js";
import { verifyMiddleware } from "../middlewares/verify-access.middleware.js";
import { homeController, homePageController } from "../controllers/home-controller.js";

const router = Router();

export default router
  .get("/user", verifyMiddleware, userController)
  .get("/admin", verifyMiddleware, adminController)
  .get("/auth", authPageController)
  .post("/auth", authController)
  .post("/home", homeController)
  .get("/home", homePageController);