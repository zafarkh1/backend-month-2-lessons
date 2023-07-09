import {Router} from 'express'
import {fileUploadController} from '../controllers/file-upload.controller.js'
import {userController} from '../controllers/user.controller.js'
import multer from 'multer'

const router = Router()

const storage = 


const upload = multer({storage})

export default router
.post('/file-upload', upload.single('file') ,fileUploadController)
.get('/user', userController)