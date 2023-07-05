import express from "express";
import {APP_PORT} from './config/app.config.js'
import routes from './route/book.route.js'

const app = express();

app.use('/api', routes)

app.listen(APP_PORT, console.log('listening ...'))