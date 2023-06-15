// const axios = require('axios')
const BASE_URL = 'http://localhost:3001/api'
const movieContainer = document.querySelector('#movieContainer')
const searchBar = document.querySelector('#searchBar')
const button = document.querySelector('#subBtn')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const subscribed = document.querySelector('#checkbox')
const searchBtn = document.querySelector('#searchBtn')

// When using the BASE_URL

//search bar functionality
const search = async () => {
  movieContainer.innerHTML=``
  let response = await axios.get(`${BASE_URL}/movies`)
  // console.log(response)
  const movies = response.data
  // console.log(movies)
  for (let i = 0; i < movies.length; i++){
  // console.log(movies[i].movie_title.toLowerCase().includes(searchBar.value.toLowerCase()) === true)
  console.log(movies[i])
  console.log(movies.length)
  console.log(searchBar.value)
      if (movies[i].movie_title.toLowerCase().includes(searchBar.value.toLowerCase()) === true){
        console.log(searchBar.value)
          movieContainer.innerHTML+=`<div><img src=${movies[i].movie_img} /></div>`}
  }   
}

//search button functionality
// console.log(searchBtn)

// document.querySelector('#searchBtn').addEventListener('click', () => {
//   search()
// })

// make search result images click to redirect to page with all their data



// subscribe button functionality 



// document.getElementById("m1").addEventListener("click", () => {
// }));

//movies[i].id

// send inputed data from subscribe form to be stored in back end
const subscribe = async () => {
  const subscriberData = 
  {
    name: getName.value,
    email: getEmail.value,
    subscribed: true,
  }
  let response = await axios.post('http://localhost:3001/api/subscriber', subscriberData)
  console.log(subscriberData)
}
button.addEventListener('click', async () => 
  {
    await subscribe()
})
