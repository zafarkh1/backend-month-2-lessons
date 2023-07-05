import { Router } from "express";
import { bookGetController } from "../controller/book.controller.js";

const router = Router();

export default router.get("/book", bookGetController);
