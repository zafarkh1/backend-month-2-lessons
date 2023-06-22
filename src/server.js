import express from "express";
import { config } from "dotenv";
import { PORT } from "./config/app.config.js";

config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Here we go");
});

app.get("/transfers", (req, res) => {
  res.send("Kimmich and Canselu are in Catalonia");
});

app.listen(PORT, console.log("waiting ..."));
