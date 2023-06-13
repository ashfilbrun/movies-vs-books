const express = require('express');
const Router = express.Router()
const controller = require('../controllers/movieControllers.js')

Router.get('/', controller.getMovies)
Router.get('/:id', controller.getMoviesById)

module.exports = Router