import express from "express";
import { PORT } from "./config/app.config.js";
import {
  bookGetController,
  bookCreateController,
  bookUpdateController,
  bookDeleteController,
} from "./controllers/book.controller.js";

const app = express();

app.use(express.json());

app
  .get("/books", bookGetController)
  .post("/books", bookCreateController)
  .patch("/books/:id", bookUpdateController)
  .delete("/books/:id", bookDeleteController);

app.listen(PORT, console.log("waiting ..."));