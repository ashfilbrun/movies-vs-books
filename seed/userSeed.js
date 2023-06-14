const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const user1 = new User(
  {
    user_name: 'George Sanders',
    email: 'ashesclaire@gmail.com',
    password: 'abc123',
    date: Date.now(),
    logged_in: true,
    favorites: [],
    // review: { type: String, required: true },
  })
  await User.deleteMany()
  await user1.save()
}

const run = async () => {
  await main()
  db.close() //close database once main is finished
}

run() //does  both above functions