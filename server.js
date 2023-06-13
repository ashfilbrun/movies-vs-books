const express = require('express')

const app = express()
const User = require('./models/user')
const PORT = process.env.PORT || 3001


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

app.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'A user with that email has already registered. Try again'})
    } else {
      // Otherwise creates a new user
      const newUser = new User({
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
      })
      newUser.save()
      return res.status(200).json({msg: newUser})
    }
  })
})

