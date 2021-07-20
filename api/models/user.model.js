const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  userName:{
    type: String,
    required:[true, 'Username is required'],
    unique:[true, 'Username already exist']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  image: String,
  banner: String,
  bio: String,
  url: String,
  ideas: [mongoose.Types.ObjectId],
  followers: [mongoose.Types.ObjectId],
  follows: [mongoose.Types.ObjectId]

})

exports.UserModel = mongoose.model('users', userSchema)
