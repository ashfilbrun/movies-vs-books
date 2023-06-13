const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
  console.log(`Expres server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send(`MOVIESSSS!`)
})

// app.get('/article/:slug', (req, res) => {
//   console.log(req.params)
//   // { slug: 'ramen' }
// })

app.get('/message/:id', (request, response) => {
  console.log(`Getting a message with the id of ${request.params.id}`)
  response.send({ msg: `Movies with an id of ${request.params.id} found` })
})

