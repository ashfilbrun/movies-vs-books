const mongoose = require('mongoose')
const movieSchema = require('./movie')
const bookSchema = require('./book')
const userSchema = require('./User')

const Movie = mongoose.model('Movie', movieSchema)
const Book = mongoose.model('Book', bookSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  Movie,
  Book,
  // Review,
  User,
}