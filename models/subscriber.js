const { Schema } = require('mongoose')

const subscriberSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    date: { type: Date, default: Date.now },
    subscribed: { type: Boolean, required: true },
    // favorites: [{ type: Schema.Types.ObjectId, ref: 'Movie', required: false }]
    // review: { type: String, required: true },
  }
)

module.exports = subscriberSchema