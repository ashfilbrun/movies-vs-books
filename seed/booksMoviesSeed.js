const db = require('../db')
const { Book, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const littleWomenBook = new Book(
    {
      book_title: 'Little Women',
      book_img: 'imagesBook/littlewomenbook.jpg',
      author: 'Louisa May Alcott',
      year_published: 1868,
      related_movies: [],
    })

  const prideAndPrejudiceBook = new Book(
    {
      book_title: 'Pride and Prejudice',
      book_img: 'imagesBook/prideprej.jpg',
      author: 'Jane Austen',
      year_published: 1813,
      related_movies: [],
    })

  const emmaBook = new Book(
    {
      book_title: 'Emma',
      book_img: 'imagesBook/emmabook.jpg',
      author: 'Jane Austen',
      year_published: 1815,
      related_movies: [],
    }
  )

  const rebeccaBook = new Book(
    {
      book_title: 'Rebecca',
      book_img: 'imagesBook/rebeccamovie.jpg',
      author: 'Daphne du Maurnier',
      year_published: 1938,
      related_movies: [],
    }
  )

  const prideAndPrejudiceMovie40 = new Movie(
    {
      movie_title: 'Pride and Prejudice (1940)',
      movie_img: '/imagesMovie/pridenprejudice40.html',
      description: 'The arrival of wealthy bachelors in town causes an uproar when families with single daughters aggressively seek engagements, including the Bennet family, with five eligible daughters.',
      year_released: 1940,
      actors: ['Greer Garson', 'Laurence Olivier', 'Mary Boland'],
      director: 'Robert Z. Leonard',
      rating: 'Non-Rated',
      run_time: '1h 58m',
      imdb: '7.4/10',
      rotten_tomatoes: '100%',
      would_watch_again: true,
      // favorites: 5,
      related_book: [],
    })

  const prideAndPrejudiceMovie95 = new Movie(
    {
      movie_title: 'Pride and Prejudice (1995)',
      movie_img: '/imagesMovie/pridenprejudice95.html',
      description: 'While the arrival of wealthy gentlemen sends her marriage-minded mother into a frenzy, willful and opinionated Elizabeth Bennet matches wits with haughty Mr. Darcy.',
      year_released: 1995,
      actors: ['Colin Firth', 'Jennifer Ehle', 'Susannah Harker'],
      director: 'Simon Langton',
      rating: 'PG',
      run_time: '5h 27m',
      imdb: '8.8/10',
      rotten_tomatoes: '88%',
      would_watch_again: true,
      // favorites: 5,
      related_book: [],
    })

    const prideAndPrejudiceMovie05 = new Movie(
      {
        movie_title: 'Pride and Prejudice (2005)',
        movie_img: '/imagesMovie/pride05.jpg',
        description: 'Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?',
        year_released: 2005,
        actors: ['Kiera Knightley', 'Matthew Macfadyen', 'Brenda Blethyn'],
        director: 'Joe Wright',
        rating: 'PG-13',
        run_time: '2h 9m',
        imdb: '7.8/10',
        rotten_tomatoes: '87%',
        would_watch_again: true,
        // favorites: 5,
        related_book: [],
      })
  const littleWomenMovie94 = new Movie(
    {
      movie_title: 'Little Women (1994)',
      movie_img: 'imagesMovie/little94.jpg',
      description: 'The March sisters live and grow in post-Civil War America.',
      year_released: 1994,
      actors: ['Susan Sarandon', 'Winona Ryder', 'Kirsten Dunst'],
      director: 'Gillian Armstrong',
      rating: 'PG',
      run_time: '1h 55m',
      imdb: '7.3/10',
      rotten_tomatoes: '93%',
      would_watch_again: true,
      // favorites: 5,
      related_book: [],
    })

  const littleWomenMovie19 = new Movie(
  {
    movie_title: 'Little Women (2019)',
    movie_img: 'imagesMovie/littlewomenmovie1.jpg',
    description: 'Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms.',
    year_released: 2019,
    actors: ['Saoirse Ronan', 'Emma Watson', 'Florence Pugh', 'Timothée Chalamet'],
    director: 'Greta Gerwig',
    rating: 'PG',
    run_time: '2h 15m',
    imdb: '7.8/10',
    rotten_tomatoes: '95%',
    would_watch_again: true,
    // favorites: 5,
    related_book: [],
  })

  const emmaMovie = new Movie(
    {
    movie_title: 'Emma',
    movie_img:'/images/emma.png.html',
    description: "While matchmaking for friends and neighbours, a young 19th Century Englishwoman nearly misses her own chance at love.",
    year_released: 1996,
    actors: ['Gwyneth Paltrow', 'James Cosmo', 'Greta Scacchi'],
    director: 'Douglas McGrath',
    rating:	'G',
    run_time:	'2hr',
    imdb: '8.8/10',
    rotten_tomatoes: '88%',
    would_watch_again: true,
    related_book: [],
  })

  const rebeccaMovie1940 = new Movie(
    {
    movie_title: 'Rebecca',
    movie_img: '/images/rebecca1940.html',
    description: `A self-conscious woman juggles adjusting to her new role as an aristocrat's wife and avoiding being intimidated by his first wife's spectral presence.`,
    year_released: 1940,
    actors: ['Laurence Olivier', 'Joan Fontaine', 'George Sanders'],
    director: 'Alfred Hitchcock',
    rating:	'PG-13',
    run_time:	'2hr 10min',
    imdb:	'8.1/10',
    rotten_tomatoes: '98%',
    would_watch_again: true,
    related_book: [],
  })

  const rebeccaMovie2020 = new Movie(
    {
    movie_title: 'Rebecca',
    movie_img: '/images/rebecca2020.html',
    description: `A young newlywed arrives at her husband's imposing family estate on a windswept English coast and finds herself battling the shadow of his first wife, Rebecca, whose legacy lives on in the house long after her death.`,
    year_released: 2020,
    actors:	['Lily James', 'Armie Hammer', 'Kristin Scott Thomas'],
    director: 'Ben Wheatley',
    rating: 'PG-13',
    run_time: '2h 3m',
    imdb:	'6/10',
    rotten_tomatoes: '39%',
    would_watch_again: true,
    related_book: [],
  })
  
  await Book.deleteMany()
  await Movie.deleteMany()

  await prideAndPrejudiceBook.save()
  await prideAndPrejudiceMovie05.save()
  await prideAndPrejudiceMovie40.save()
  await prideAndPrejudiceMovie95.save()
  prideAndPrejudiceBook.related_movies.push(prideAndPrejudiceMovie05._id, prideAndPrejudiceMovie40._id, prideAndPrejudiceMovie95._id)
  prideAndPrejudiceMovie05.related_book.push(prideAndPrejudiceBook._id)
  prideAndPrejudiceMovie40.related_book.push(prideAndPrejudiceBook._id)
  prideAndPrejudiceMovie95.related_book.push(prideAndPrejudiceBook._id)

  await littleWomenBook.save()
  await littleWomenMovie94.save()
  await littleWomenMovie19.save()
  littleWomenBook.related_movies.push(littleWomenMovie19._id, littleWomenMovie94._id)
  littleWomenMovie94.related_book.push(littleWomenBook._id)
  littleWomenMovie19.related_book.push(littleWomenBook._id)

  await emmaBook.save()
  await emmaMovie.save()
  emmaBook.related_movies.push(emmaMovie._id)
  emmaMovie.related_book.push(littleWomenBook._id)

  await rebeccaBook.save()
  await rebeccaMovie1940.save()
  await rebeccaMovie2020.save()
  rebeccaBook.related_movies.push(rebeccaMovie1940._id, rebeccaMovie2020._id)
  rebeccaMovie1940.related_movies.push(rebeccaMovie2020._id)
  rebeccaMovie2020.related_movies.push(rebeccaMovie2020._id)

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