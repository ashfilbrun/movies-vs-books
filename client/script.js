// const axios = require('axios')
const BASE_URL = 'http://localhost:3001/api'
const movieContainer = document.querySelector('#movieContainer')
const searchQuery = document.querySelector('#searchQuery')
// When using the BASE_URL

const search = async () => {
  movieContainer.innerHTML=``
  let response = await axios.get(`${BASE_URL}/movies`)
  // console.log(response)
  const movies = response.data
  // console.log(movies)
  for (let i = 0; i < movies.length; i++){
  // console.log(movies[i].movie_title.toLowerCase().includes(searchQuery.value.toLowerCase()) === true)
  console.log(movies[i])
  console.log(movies.length)
  console.log(searchQuery.value)
      if (movies[i].movie_title.toLowerCase().includes(searchQuery.value.toLowerCase()) === true){
        console.log(searchQuery.value)
          movieContainer.innerHTML+=`<div><img src=${movies[i].movie_img} /></div>`}
  }   
}
const searchBtn = document.querySelector('#searchBtn')
// console.log(searchBtn)
document.querySelector('#searchBtn').addEventListener('click', () => {
  search()
})

// document.getElementById("m1").addEventListener("click", () => {
// }));