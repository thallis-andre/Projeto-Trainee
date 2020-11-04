const { Router } = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')
const UserController = require('./controllers/UserController')

const routes = Router()

routes.post('/register', UserController.register)
routes.post('/login', UserController.login)
routes.put('/uploadImage', multer(multerConfig).single('file'), UserController.uploadImage)

module.exports = routes