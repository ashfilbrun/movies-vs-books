const express = require('express');
const Router = express.Router()
const controller = require('../controllers/bookControllers.js')

Router.get('/', controller.getBooks)
Router.get('/:id', controller.getBookById)

module.exports = Router