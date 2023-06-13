const { Movie } = require('../models')
const movieSchema = require('../models/movie.js')

const getMovies = async (req, res) => {
  const movie = await Movie.find({})
  res.json(movie)
}

const getMoviesById = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id)
    if(!movie) throw Error('movie not found')
    res.json(movie)
  } catch (e){
    console.log(e)
    res.send('movie not found')
  }
}

module.exports = {
  getMovie,
  getMoviesById
}