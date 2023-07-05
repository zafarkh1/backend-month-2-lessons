import express from "express";
import {APP_PORT} from './config/app.config.js'
import routes from './route/book.route.js'
import {join} from 'path'

const app = express();

app.set('view engine', 'ejs')
app.set('views', join(process.cwd(), 'src', 'view'))

app.use('/api', routes)

app.listen(APP_PORT, console.log('listening ...'))