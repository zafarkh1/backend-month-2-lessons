import express from "express";
import cors from 'cors'
import { APP_PORT } from "./config/server.config.js";
import routes from './routes/course.route.js'


const app = express();

app.use(express.json());
app.use(cors({
	origin: '*'
}))
app.use('/api/v1', routes)

app.all("/*", (req, res) => {
  res.status(404).send({
    message: `${req.url} not found`,
  });
});

app.listen(APP_PORT, console.log("listening ..."));
