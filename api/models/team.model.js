const mongoose =require('mongoose')


const teamSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
    unique:[true, 'Team name already exist']
  },
  description:{
    type: String
  },
  member:{
    type:Array,
    require: true
  },
  projects:{
    type:Array
  },
  messages:{
    type: Array
  }
})

exports.TeamModel = mongoose.model('teams', teamSchema)