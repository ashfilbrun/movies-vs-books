const db = require('../db')
const { Book, Movie, User } = require('../models')

const main = async () => {
  const user1 = new User (
  {
    user_name: 'George Sanders',
    email: 'ashesclaire@gmail.com',
    password: 'abc123',
    date: Date.now,
    logged_in: true,
    // review: { type: String, required: true },
  }
)}