const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    user_name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    logged_in: { type: Boolean, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Movie', required: false }]
    // review: { type: String, required: true },
  }
)

module.exports = userSchema