const db = require('../db')
const { Book, Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const createBooks = [
    {
      book_title: 'Little Women',
      book_img: '/imagesBooks/littlewomenbook.jpg',
      author: 'Louisa May Alcott',
      year_published: 1868,
    },
    {
      book_title: 'Pride and Prejudice',
      book_img: '/imagesBook/prideprej.jpg',
      author: 'Jane Austen ',
      year_published: 1813,
    },

  ]
}