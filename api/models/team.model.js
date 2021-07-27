const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: [true, 'Team name already exist']
  },
  description: {
    type: String
  },
  members: {
    type: Array,
    require: true
  },
  projects: {
    type: Array
  },
  messages: {
    type: Array
  },
  image: {
    type: String
  }
})

exports.TeamModel = mongoose.model('teams', teamSchema)
