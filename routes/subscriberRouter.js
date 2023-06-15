const express = require('express');
const Router = express.Router()
const controller = require('../controllers/subscriberControllers.js')

Router.get('/', controller.getSubscriber)
Router.get('/:id', controller.getSubscriberById)

Router.post('/', controller.createSubscriber)
// Router.put('/:id', controller.updateSubscriberById)
Router.delete('/id', controller.deleteSubscriberById)

module.exports = Router