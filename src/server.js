import express from 'express'
import {join} from 'path'
import routes from './routes/route.js'
import cookieParser from 'cookie-parser'

const app = express()

app.set('view engine', 'ejs')
app.set('views', join(process.cwd(), 'src', 'views'))

app.use(cookieParser())

app.use(express.urlencoded())
app.use('/api', routes)

app.listen(2024, console.log('listening ...'))