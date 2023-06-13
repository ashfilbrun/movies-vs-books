const express = require('express');
const Router = express.Router()
const controller = require('../controllers/bookControllers.js')

Router.get('/', controller.getBook)
Router.get('/:id', controller.getBookById)

module.exports = Router