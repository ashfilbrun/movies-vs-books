const express = require('express');

const Router = express.Router()

const MovieRouter = require('./movieRouter.js')
const BookRouter = require('./bookRouter.js')
// const UserRouter = require('./userRouter.js')
const SubscriberRouter = require('./subscriberRouter.js')

Router.use('/movies', MovieRouter)
Router.use('/books', BookRouter)
Router.use('/subscriber', SubscriberRouter)
// Router.use('/user', UserRouter)

module.exports = Router