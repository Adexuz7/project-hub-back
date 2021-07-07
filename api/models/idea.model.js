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
  categories: {
    type: [mongoose.Types.ObjectId],
    required: [true, 'Category is required']
  },
  difficulty: {
    type: String,
    required: [true, 'Difficulty is required']
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: [true, 'Author is required']
  },
  date: Date,
  likes: [mongoose.Types.ObjectId],
  comments: [commentSchema],
  projects: [mongoose.Types.ObjectId]
})

exports.IdeaModel = mongoose.model('ideas', ideaSchema)
