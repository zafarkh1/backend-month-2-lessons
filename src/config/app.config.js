import { config } from "dotenv";

config();

export const PORT = process.env.APP_PORT
  ? parseInt(process.env.APP_PORT, 10)
  : 9000;
