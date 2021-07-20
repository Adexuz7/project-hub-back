const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  comment: {
    type: String,
    required: true
  },
  likes: {
    type: Array
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = commentSchema
