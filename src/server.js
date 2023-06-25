import express from "express";
import { APP_PORT } from "./config/app.config.js";
import { exceptionHandler } from "./middlewares/exception.handler.middleware.js";
import { verifyAccess } from "./middlewares/verify-access.middleware.js";
import { signInController } from "./controllers/auth.controller.js";
import { postController } from "./controllers/postGet.controller.js";
import { exceptions } from "./exception/not-found-exception.js";

const app = express();

app.use(verifyAccess);
app.use(express.json());

app.get("/posts", postController).post("/sign-in", signInController);

app.all("/*", (req, _) => {
  throw new exceptions(`${req.url.split("/")[1]} not found`);
});

app.use(exceptionHandler);

app.listen(APP_PORT, console.log("waiting ..."));