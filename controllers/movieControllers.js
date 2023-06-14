const { Movie } = require('../models')
// const movieSchema = require('../models/movie.js')

const getMovies = async (req, res) => {
  const movie = await Movie.find({})
  res.json(movie)
}

const getMovieById = async (req, res) => {
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

const updateMovieById = async (req, res) => {
  try {
      const { id } = req.params;
      const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
          if (err) {
              res.status(500).send(err);
          }
          if (!movie) {
              res.status(500).send('Movie not found!');
          }
          return res.status(200).json(movie);
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteMovieById = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id)
    if(!movie) throw Error(`Movie not found`)
    res.json('Movie not found')
} catch (e){
    console.log(e)
    res.send(`Movie not deleted`)
}
}

module.exports = {
  getMovies,
  getMovieById,
  deleteMovieById,
  updateMovieById,   //Doesn't have to be named this way
}