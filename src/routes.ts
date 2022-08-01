import { Router } from 'express'

import uploadConfig from './uploadConfig'

import multer from 'multer'
import postController from './postController'

const upload = multer(uploadConfig)

const route = Router()

route.get('/all', postController.getAll),
route.get('/search', postController.getSearch),
route.post('/register', upload.single('image'), postController.registerPost)

export default route
