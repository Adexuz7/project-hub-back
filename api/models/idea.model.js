const mongoose = require('mongoose')
const commentSchema = require('./comment.model')

const ideaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
    required: [true, 'Category is required']
  }],
  difficulty: {
    type: String,
    // enum:['easy', 'medium', 'hard'],
    // default:'medium',
    required: [true, 'Difficulty is required']
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: [true, 'Author is required']
  },
  date: Date,
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  comments: [commentSchema],
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'projects'
  }]
})

exports.IdeaModel = mongoose.model('ideas', ideaSchema)
