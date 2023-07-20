// const axios = require('axios')
const BASE_URL = 'http://localhost:3001/api'
const movieContainer = document.querySelector('#movieContainer')
const searchBar = document.querySelector('#searchBar')
const subButton = document.querySelector('#subBtn')
const subName = document.querySelector('#subName')
const subEmail = document.querySelector('#subEmail')
const subscribed = document.querySelector('#checkbox')
const searchButton = document.getElementById('searchBtn')
const modal = document.getElementById('myModal') 
// console.log(searchButton)
// When using the BASE_URL

//search bar functionality
const search = async () => {
  movieContainer.innerHTML=``
  let response = await axios.get(`${BASE_URL}/movies`)
  console.log(response)
  const movies = response.data
  // console.log(movies)
  for (let i = 0; i < movies.length; i++){
  // console.log(movies[i].movie_title.toLowerCase().includes(searchBar.value.toLowerCase()) === true)
  // console.log(movies[i])
  // console.log(movies.length)
  // console.log(searchBar.value)
      if (movies[i].movie_title.toLowerCase().includes(searchBar.value.toLowerCase()) === true){
        console.log(searchBar.value)
          movieContainer.innerHTML+=`<div id="${'movies'+i}"><img src=${movies[i].movie_img} /></div>`
        const currentMovie = document.getElementById('movies'+i)
        console.log(currentMovie)
        currentMovie.addEventListener('click', () => {
          openModal(movies[i])
        })
      }
  }   
}

//search button functionality
// console.log(searchBtn)

searchButton.addEventListener('click', (event) => {
  event.preventDefault()
  search()
})

// make search result images click to redirect to page with all their data
const img = document.getElementById('myImg');
const modalMovieImage = document.getElementById('modalImg')
const modalMovieTitle = document.getElementById('modalName')
const modalMovieDescription = document.getElementById('modalDescription')
const modalMovieYear = document.getElementById('modalYear')
const modalMovieActors = document.getElementById('modalActors')
const modalMovieDirector = document.getElementById('modalDirector')
const modalMovieRating = document.getElementById('modalRating')
const modalMovieRuntime = document.getElementById('modalRunTime')
const modalMovieImdb = document.getElementById('modalImdb')
const modalMovieRottenTomatoes = document.getElementById('modalRotten')
const modalWatchAgain = document.getElementById('modalWatchAgain')
const modalRelatedBook = document.getElementById('modalBook')

const openModal = (movie) => {
  console.log('openModal')
  modal.style.display = 'block';
  modalMovieImage.src = movie.movie_img
  modalMovieTitle.innerText = movie.movie_title
  modalMovieDescription.innerText = movie.description
  modalMovieYear.innerText = movie.year_released
  modalMovieActors.innerText = movie.actors
  modalMovieDirector.innerText = movie.director
  modalMovieRating.innerText = movie.rating
  modalMovieRuntime.innerText = movie.run_time
  modalMovieImdb.innerText = movie.imdb
  modalMovieRottenTomatoes.innerText = movie.rotten_tomatoes
  modalWatchAgain.innerText = movie.would_watch_again
  modalRelatedBook.innerText = movie.related_book
}

// const captionText = document.getElementById
// img.onclick = function(){
//   modal.style.display = 'block';
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
  modal.style.display = "none";
}



// document.getElementById("m1").addEventListener("click", () => {
// }));

//movies[i].id

// send inputed data from subscribe form to be stored in back end
const subscribe = async () => {
  const subscriberData = 
  {
    subName: subName.value,
    email: subEmail.value,
    subscribed: subscribed.checked,
  }
  let response = await axios.post('http://localhost:3001/api/subscriber', subscriberData)
  console.log(subscriberData)
}
subButton.addEventListener('click', async (event) => 
  {
    event.preventDefault()
    await subscribe()
})
