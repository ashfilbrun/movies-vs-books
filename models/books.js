const { Schema } = require('mongoose')

const bookSchema = new Schema(
  {
    book_title: { type: String, required: true },
    book_img: { type: Image, required: true },
    author: { type: String, required: true },
    year_published: { type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = bookSchema