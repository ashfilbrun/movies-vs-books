const mongoose = require('mongoose')
const movieSchema = require('./movie')
const bookSchema = require('./book')
const reviewSchema = require('./review')

const Movie = mongoose.model('Movie', movieSchema)
const Book = mongoose.model('Book', bookSchema)
const Review = mongoose.model('Review', reviewSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  Movie,
  Book,
  Review,
  User,
}