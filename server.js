const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const AppRouter = require('./routes/AppRouter')
const User = require('./models/user')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`MOVIESSSS!`)
})

// app.get('/article/:slug', (req, res) => {
  //   console.log(req.params)
  //   // { slug: 'ramen' }
  // })
  
  app.get('/message/:id', (req, res) => {
    console.log(`Getting a message with the id of ${req.params.id}`)
    res.send({ msg: `Movies with an id of ${req.params.id} found` })
  })
  
  // app.post('/register', (req, res) => {
  //   User.findOne({ email: req.body.email }).then((user) => {
  //     if (user) {
  //       return res.status(400).json({ email: 'A user with that email has already registered. Try again'})
  //     } else {
  //       // Otherwise creates a new user
  //       const newUser = new User({
  //         user_name: req.body.user_name,
  //         email: req.body.email,
  //         password: req.body.password,
  //       })
  //       newUser.save()
  //       return res.status(200).json({msg: newUser})
  //     }
  //   })
  // })
  
  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })
  