const { Book } = require('../models')
const bookSchema = require('../models/book.js')

const getBook = async (req, res) => {
  const book = await Book.find({})
  res.json(book)
}

const getBookById = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id)
    if(!book) throw Error('Book not found')
    res.json(book)
  } catch (e){
    console.log(e)
    res.send('Book not found')
  }
}

module.exports = {
  getBook,
  getBookById
}