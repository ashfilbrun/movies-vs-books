const express = require('express');

const Router = express.Router()

const MovieRouter = require('./movieRouter.js')
const BookRouter = require('./bookRouter.js')
const ReviewRouter = require('/reviewRouter.js')

Router.use('/movies', MovieRouter)
Router.use('/books', BookRouter)
// Router.use('/reviews', ReviewRouter)

module.exports = Router