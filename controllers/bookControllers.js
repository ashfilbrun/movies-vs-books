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

const createBook = async (req, res) => {
  try {
      const book = await new Book(req.body)
      await book.save()
      return res.status(201).json({
          book,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

const updateBookById = async (req, res) => {
  try {
      const { id } = req.params;
      const book = await Book.findByIdAndUpdate(id, req.body, { new: true })
          if (err) {
              res.status(500).send(err);
          }
          if (!book) {
              res.status(500).send('Book not found!');
          }
          return res.status(200).json(book);
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findByIdAndDelete(id)
    if(!book) throw Error(`Book not found`)
    res.json('Book not found')
} catch (e){
    console.log(e)
    res.send(`Book not deleted`)
}
}


module.exports = {
  getBook,
  getBookById,
  createBook,
  deleteBookById,
  updateBookById,
}