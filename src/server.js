import express from 'express'
import {join} from 'path'
import routes from './routes/route.js'

const APP_PORT = 2024

const app = express()

app.set('view engine', 'ejs')
app.set('views', join(process.cwd(), 'src', 'views'))

app.use('/uploads', express.static(join(process.cwd(), 'src', 'uploads')))
app.use('/public', express.static(join(process.cwd(), 'src', 'public')))

app.use(express.urlencoded())
app.use('/api', routes)

app.listen(APP_PORT, console.log('listening ...'))