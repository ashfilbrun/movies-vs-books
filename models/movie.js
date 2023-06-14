const { Schema, SchemaTypeOptions } = require('mongoose')

const movieSchema = new Schema (
  {
    movie_title: { type: String, required: true },
    movie_img: { type: String, required: true },
    description: { type: String, required: true },
    year_released: { type: Number, required: true },
    actors: { type: Array, required: true },
    director: { type: String, required: true },
    rating: { type: String, required: true },
    run_time: { type: String, required: true },
    imdb: { type: String, required: true },
    rotten_tomatoes: { type: String, required: true },
    would_watch_again: { type: Boolean, required: true },
    favorites: { type: Number, required: false },
    related_book: [{ type: Schema.Types.ObjectId, required: true }],
  },
  { timestamps: true }
)

module.exports = movieSchema