import { Router } from "express";
import { bookGetController, bookPostController } from "../controller/book.controller.js";

const router = Router();

export default router
.get("/books", bookGetController)
.post('/books', bookPostController)
