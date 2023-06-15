const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const AppRouter = require('./routes/AppRouter')
const Subscriber = require('./models/subscriber')
// const User = require('./models/User')
const BASE_URL = 'http://localhost:3001/'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`${BASE_URL}`)
})

app.use('/api', AppRouter);
app.use('/', express.static('client'))
app.use('*', express.static('client'))

// app.get('/article/:slug', (req, res) => {
  //   console.log(req.params)
  //   // { slug: 'ramen' }
  // })
  
  
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
  