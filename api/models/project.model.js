const mongoose = require('mongoose')
const commentSchema = require('./comment.model')

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
    required: true
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  comments: [commentSchema],
  ideas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ideas'
  }],
  team: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teams'
  }],
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  repository: {
    type: String
  }
})

exports.projectModel = mongoose.model('projects', projectSchema)
