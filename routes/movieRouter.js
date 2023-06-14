const express = require('express');
const Router = express.Router()
const controller = require('../controllers/movieControllers.js')

Router.get('/', controller.getMovies)
Router.get('/:id', controller.getMovieById)


Router.put('/:id', controller.updateMovieById)
Router.delete('/:id', controller.deleteMovieById)


module.exports = Router