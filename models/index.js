const mongoose = require('mongoose')
const movieSchema = require('./movie')
const bookSchema = require('./book')
const reviewSchema = require('./review')

const Movie = mongoose.model('Movie', movieSchema)
const Book = mongoose.model('Book', bookSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  Movie,
  Book,
  Review
}