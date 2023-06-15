const mongoose = require('mongoose')
const movieSchema = require('./movie')
const bookSchema = require('./book')
const subscriberSchema = require('./subscriber')
// const userSchema = require('./User')

const Movie = mongoose.model('Movie', movieSchema)
const Book = mongoose.model('Book', bookSchema)
const Subscriber = mongoose.model('Subscriber', subscriberSchema)
// const User = mongoose.model('User', userSchema)

module.exports = {
  Movie,
  Book,
  Subscriber,
  // User,
}