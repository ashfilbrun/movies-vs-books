const express = require('express');
const Router = express.Router()
const controller = require('../controllers/userControllers.js')

Router.get('/', controller.getUser)
Router.get('/:id', controller.getUserById)

Router.post('/', controller.createUser)
Router.put('/:id', controller.updateUserById)
Router.delete('/id', controller.deleteUserById)

module.exports = Router