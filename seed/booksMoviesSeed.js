const db = require('../db')
const { Movie, Book } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // await Book.deleteMany()
  // await Movie.deleteMany()

  const books = [
  {
    book_title: 'Rebecca',
    book_img: '/imagesBook/rebeccamovie.jpg',
    author: 'Daphne du Maurnier',
    year_published: 1938,
    related_movies: [],
  },
  {
    book_title: 'Little Women',
    book_img: '/imagesBook/littlewomenbook.jpg',
    author: 'Louisa May Alcott',
    year_published: 1868,
    related_movies: [], 
  },
  {
    book_title: 'Pride and Prejudice',
    book_img: '/imagesBook/prideprej.jpg',
    author: 'Jane Austen',
    year_published: 1813,
    related_movies: [],
  },
  {
    book_title: 'Emma',
    book_img: '/imagesBook/emmabook.jpg',
    author: 'Jane Austen',
    year_published: 1815,
    related_movies: [],
  },
  {
    book_title: 'Murder on the Orient Express',
    book_img: '/imagesBook/murder.jpg',
    author: 'Agatha Christie',
    year_published: 1934,
    related_movies: [],
  },
  {
    book_title: 'Jane Eyre',
    book_img: '/imagesBook/janeeyrebook.jpg',
    author: 'Charlotte Brontë',
    year_published: 1847,
    related_movies: [],
  },
  {
    book_title: 'Wuthering Heights',
    book_img: '/imagesBook/wutheringBook.jpg',
    author:	'Emily Brontë',
    year_published: 1847,
    related_movies: [],
  },
  {
    book_title: 'To Kill A Mockingbird',
    book_img: '/imagesBook/mockingBook.jpg',
    author: 'Harpee Lee',
    year_published: 1960,
    related_movies: [],
  }
]

await Book.insertMany(books)

const rebeccaBook = await Book.findOne({book_title: 'Rebecca'})
const littleWomenBook = await Book.findOne({book_title: 'Little Women'})
const prideAndPrejudiceBook = await Book.findOne({book_title:'Pride and Prejudice'})
const emmaBook = await Book.findOne({book_title:'Emma'})
const murderBook = await Book.findOne({book_title:'Murder of the Orient Express'})
const janeEyreBook = await Book.findOne({book_title:'Jane Eyre'})
const wutheringBook = await Book.findOne({book_title: 'Wuthering Heights'})
const mockingbirdBook = await Book.findOne({book_title: 'To Kill A Mockingbird'})

  const movies = [
  {
    movie_title: 'Murder on the Orient Express',
    movie_img:'/imagesMovie/orientExpress.jpg',
    description: `In December 1935, when his transcontinental luxury train is stranded by deep snow, detective Hercule Poirot is called on to solve a murder that occurred in his car the night before, with a multitude of suspects.`,
    year_released: 1974,
    actors: ['Albert Finney', 'Lauren Bacall', 'Sean Connery'],
    director: 'Sidney Lumet',
    rating:	'PG-13',
    run_time:	'2h 8m',
    imdb: '7.2/10',
    rotten_tomatoes: '90%',		
    would_watch_again: true,
    // related_book: murderBook._id,
  },
  {
    movie_title: 'Rebecca',
    movie_img: '/imagesMovie/rebecca20.jpg',
    description: `A young newlywed arrives at her husband's imposing family estate on a windswept English coast and finds herself battling the shadow of his first wife, Rebecca, whose legacy lives on in the house long after her death.`,
    year_released: 2020,
    actors:	['Lily James', 'Armie Hammer', 'Kristin Scott Thomas'],
    director: 'Ben Wheatley',
    rating: 'PG-13',
    run_time: '2h 3m',
    imdb:	'6/10',
    rotten_tomatoes: '39%',
    would_watch_again: true,
    // related_book: rebeccaBook._id,
  },
  {
    movie_title: 'Rebecca (1940)',
    movie_img: '/imagesMovie/rebecca40.jpg',
    description: `A self-conscious woman juggles adjusting to her new role as an aristocrat's wife and avoiding being intimidated by his first wife's spectral presence.`,
    year_released: 1940,
    actors: ['Laurence Olivier', 'Joan Fontaine', 'George Sanders'],
    director: 'Alfred Hitchcock',
    rating:	'PG-13',
    run_time:	'2hr 10min',
    imdb:	'8.1/10',
    rotten_tomatoes: '98%',
    would_watch_again: true,
    // related_book: rebeccaBook._id,
  },
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
    // related_book: prideAndPrejudiceBook._id,
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
    // related_book: prideAndPrejudiceBook._id,
  },
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
    // related_book: prideAndPrejudiceBook._id,
  },
  {
    movie_title: 'Little Women (1994)',
    movie_img: '/imagesMovie/little94.jpg',
    description: 'The March sisters live and grow in post-Civil War America.',
    year_released: 1994,
    actors: ['Susan Sarandon', 'Winona Ryder', 'Kirsten Dunst'],
    director: 'Gillian Armstrong',
    rating: 'PG',
    run_time: '1h 55m',
    imdb: '7.3/10',
    rotten_tomatoes: '93%',
    would_watch_again: true,
    // related_book: littleWomenBook._id,
  },
  {
    movie_title: 'Little Women (2019)',
    movie_img: `/imagesMovie/littlewomen1.jpg`,
    description: 'Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms.',
    year_released: 2019,
    actors: ['Saoirse Ronan', 'Emma Watson', 'Florence Pugh', 'Timothée Chalamet'],
    director: 'Greta Gerwig',
    rating: 'PG',
    run_time: '2h 15m',
    imdb: '7.8/10',
    rotten_tomatoes: '95%',
    would_watch_again: true,
    // related_book: littleWomenBook._id,
  },
  {
    movie_title: 'Emma',
    movie_img:'/imagesMovie/emmamovie.jpg',
    description: "While matchmaking for friends and neighbours, a young 19th Century Englishwoman nearly misses her own chance at love.",
    year_released: 1996,
    actors: ['Gwyneth Paltrow', 'James Cosmo', 'Greta Scacchi'],
    director: 'Douglas McGrath',
    rating:	'G',
    run_time:	'2hr',
    imdb: '8.8/10',
    rotten_tomatoes: '88%',
    would_watch_again: true,
    // related_book: emmaBook._id,
  },
  {
    movie_title: 'Jane Eyre',
    movie_img: '/imagesBook/janeeyremovie.jpg',
    description: `A mousy governess who softens the heart of her employer soon discovers that he's hiding a terrible secret.`,
    year_released: 2011,
    actors:	['Mia Wasikowska', 'Michael Fassbender', 'Jamie Bell'],
    director: 'Cary Joji Fukunaga',
    rating:	'PG-13',
    run_time: '2h',
    imdb: '7.3/10',
    rotten_tomatoes: '85%',
    would_watch_again: true,
    // related_book: janeEyreBook._id,
  },
  {
    movie_title: 'Wuthering Heights',
    movie_img:'/imagesMovie/wuthering.jpg',
    description:	`A servant in the house of Wuthering Heights tells a traveler the unfortunate tale of lovers Cathy and Heathcliff.`,
    year_released: 1939,
    actors: ['Merle Oberon', 'Laurence Olivier', 'David Niven'],
    director: `William Wyler`,
    rating: 'Not-Rated',
    run_time:	'1h 44m',
    imdb: '7.5/10',
    rotten_tomatoes: '96%',
    would_watch_again: true,
    // related_book: wutheringBook._id,
  },
  {
    movie_title: `To Kill A Mockingbird`,
    movie_img: `/imagesMovie/mockingbirdmovie.jpg`,
    description:`Atticus Finch, a widowed lawyer in Depression-era Alabama, defends a Black man against an undeserved rape charge, and tries to educate his young children against prejudice.`,
    year_released: 1962,
    actors: ['Gregory Peck', 'John Megna', 'Frank Overton'],
    director: `Robert Mulligan`,
    rating: `PG-13`,
    run_time: `2hr 9min`,
    imdb: `8.3/10`,
    rotten_tomatoes: `93%`,
    would_watch_again: true,
    // related_book: mockingbirdBook._id,
  }
]

  await Book.deleteMany()
  await Movie.deleteMany()

  // const rebeccaMovie20 = await Movie.findOne({movie_title: 'Rebecca (2020)'})


await Movie.insertMany(movies)
  // const prideandPrejudiceMovie05 = await Movie.findOne({'Pride and Prejudice (2005)'})
  // const prideAndPrejudiceMovie95 = await Movie.findOne({'Pride and Prejudice (1995)'})
  // const prideAndPrejudiceMovie40 = await Movie.findOne({'Pride and Prejudice 1940'})

//   prideAndPrejudiceBook.related_movies.push(prideAndPrejudiceMovie05._id, prideAndPrejudiceMovie40._id, prideAndPrejudiceMovie95._id)
//   prideAndPrejudiceMovie05.related_book.push(prideAndPrejudiceBook._id)
//   prideAndPrejudiceMovie40.related_book.push(prideAndPrejudiceBook._id)
//   prideAndPrejudiceMovie95.related_book.push(prideAndPrejudiceBook._id)

//   await littleWomenBook.save()
//   await littleWomenMovie94.save()
//   await littleWomenMovie19.save()
//   littleWomenBook.related_movies.push(littleWomenMovie19._id, littleWomenMovie94._id)
//   littleWomenMovie94.related_book.push(littleWomenBook._id)
//   littleWomenMovie19.related_book.push(littleWomenBook._id)

//   await emmaBook.save()
//   await emmaMovie.save()
//   emmaBook.related_movies.push(emmaMovie._id)
//   emmaMovie.related_book.push(littleWomenBook._id)

//   await rebeccaBook.save()
//   await rebeccaMovie1940.save()
//   await rebeccaMovie2020.save()
//   rebeccaBook.related_movies.push(rebeccaMovie1940._id, rebeccaMovie2020._id)
//   rebeccaMovie1940.related_book.push(rebeccaBook._id)
//   rebeccaMovie2020.related_book.push(rebeccaBook._id)
}

const run = async () => {
  await main()
  db.close() //close database once main is finished
}

run() //does  both above functions