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
    ref:'categories',
    required: true
  }],
  likes:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'users'
    }],
  comments: {
    type: [commentSchema],
  },
  ideas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'ideas'
  }],
  requirements: {
    type: Array,
    required: true
  },
  team: {
    type: Array,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  repository: {
    type: String,

  },
  issues: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'is'
  }
})

exports.projectModel = mongoose.model('projects', projectSchema)