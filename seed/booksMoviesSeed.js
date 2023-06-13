const db = require('../db')
const { Book, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const littleWomenBook = new Book(
    {
      book_title: 'Little Women',
      book_img: '/imagesBooks/littleomenbook.jpg',
      author: 'Louisa May Alcott',
      year_published: 1868,
    })
  await littleWomenBook.save()

  const littleWomenMovie94 = new Movie(
    {
      movie_title: 'Little Women (1994)',
      movie_img: '/images/',
      description: 'hello',
      year_released: 1994,
      actors: ['Susan Sarandon', 'Winona Ryder', 'Kirsten Dunst'],
      director: 'Gillian Armstrong',
      rating: 'PG',
      run_time: '1h 55m',
      imdb: '7.3/10',
      rotten_tomatoes: '93%',
      would_watch_again: true,
      favorites: 5,
      related_book: [],
    })

  const littleWomenMovie19 = new Movie(
  {
    movie_title: 'Little Women (2019)',
    movie_img: '/images/',
    description: 'hello',
    year_released: 2019,
    actors: ['Saoirse Ronan', 'Emma Watson', 'Florence Pugh', 'Timothée Chalamet'],
    director: 'Greta Gerwig',
    rating: 'PG',
    run_time: '2h 15m',
    imdb: '7.8/10',
    rotten_tomatoes: '95%',
    would_watch_again: true,
    favorites: 5,
    related_book: [],
  })
  
  littleWomenBook.related_movies.push(littleWomenMovie19._id, littleWomenMovie94._id)
  littleWomenMovie94.related_book.push(littleWomenBook._id)
  littleWomenMovie19.related_book.push(littleWomenBook._id)
  await littleWomenBook.save()
  await littleWomenMovie94.save()
  await littleWomenMovie19.save()

  // const prideAndPrejudice = new Book(
  //   {
  //     book_title: 'Pride and Prejudice',
  //     book_img: '/imagesBook/prideprej.jpg',
  //     author: 'Jane Austen ',
  //     year_published: 1813,
  //   })
  // await prideAndPrejudice.save()
}

const run = async () => {
  await main()
  db.close() //close database once main is finished
}

run() //does  both above functions