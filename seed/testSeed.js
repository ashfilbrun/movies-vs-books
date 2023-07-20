const db = require('../db')
const { Movie, Book } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const books = [
    {
      book_title: 'Pride and Prejudice',
      book_img: '/imagesBook/prideprej.jpg',
      author: 'Jane Austen',
      year_published: 1813,
      related_movies: [],
    }
  ]
  
  await Book.deleteMany()
  await Movie.deleteMany()
  await Book.insertMany(books)
  const prideAndPrejudiceBook = await Book.findOne({book_title:'Pride and Prejudice'})
  
  const movies = [
    {
      movie_title: 'Pride and Prejudice (1940)',
      movie_img: '/imagesMovie/pride40.jpg',
      description: 'The arrival of wealthy bachelors in town causes an uproar when families with single daughters aggressively seek engagements, including the Bennet family, with five eligible daughters.',
      year_released: 1940,
      actors: ['Greer Garson', 'Laurence Olivier', 'Mary Boland'],
      director: 'Robert Z. Leonard',
      rating: 'Non-Rated',
      run_time: '1h 58m',
      imdb: '7.4/10',
      rotten_tomatoes: '100%',
      would_watch_again: true,
      related_book: prideAndPrejudiceBook._id,
    },
    {
      movie_title: 'Pride and Prejudice (1995)',
      movie_img: '/imagesMovie/pride95.jpg',
      description: 'While the arrival of wealthy gentlemen sends her marriage-minded mother into a frenzy, willful and opinionated Elizabeth Bennet matches wits with haughty Mr. Darcy.',
      year_released: 1995,
      actors: ['Colin Firth', 'Jennifer Ehle', 'Susannah Harker'],
      director: 'Simon Langton',
      rating: 'PG',
      run_time: '5h 27m',
      imdb: '8.8/10',
      rotten_tomatoes: '88%',
      would_watch_again: true,
      related_book: prideAndPrejudiceBook._id,
    }
  ]
  await Movie.insertMany(movies)
  db.close() //close database once main is finished
}

  const run = async () => {
    await main()
  }
  
  run() //does  both above functions