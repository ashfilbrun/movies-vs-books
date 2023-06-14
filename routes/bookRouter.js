const express = require('express');
const Router = express.Router()
const controller = require('../controllers/bookControllers.js')

Router.get('/', controller.getBook)
Router.get('/:id', controller.getBookById)

// Router.post('/'.controller.createBook)
// Router.put('/:id', controller.updateBook)
// Router.delete('/id', controller.deleteBook)

module.exports = Router