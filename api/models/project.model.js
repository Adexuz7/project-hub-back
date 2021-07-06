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
  categories: {
    type: Array,
    required: true
  },
  likes: {
    type: Number,
  },
  comments: {
    type: [commentSchema],
  },
  ideas: {
    type: String
  },
  requirements: {
    type: Array,
    required: true
  },
  team: {
    type: Array,
  },
  date: {
    type: Date,
    required: true
  },
  repository: {
    type: String,

  },
  issues: {
    type: Array,
  }
})

const projectModel = mongoose.model("projects", projectSchema);

module.exports = projectModel;