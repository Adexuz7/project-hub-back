const mongoose =require('mongoose')

const issuesSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type:String,
    required: String
  },
  status:{
    type: String,
    required: true,
    enum:['open', 'closed'],
    default: 'open'
  },
  date:{
    type:Date,
    required:true
  },
  comments:{
    type:String,

  }
}

exports.issuesModel = mongoose.model('issues', issuesSchema)