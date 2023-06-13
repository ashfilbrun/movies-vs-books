const { Schema } = require('mongoose')

const bookSchema = new Schema(
  {
    book_title: { type: String, required: true },
    book_img: { type: Buffer, required: true },
    author: { type: String, required: true },
    year_published: { type: Number, required: true },
    related_movies: [{ type: Schema.Types.ObjectId, ref: 'Movie'}], //array of schema types object id's
  },
  { timestamps: true }
)

module.exports = bookSchema