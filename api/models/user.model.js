const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  userName: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Username already exist']
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
  ideas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ideas'
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  follows: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teams'
  }],
  specialty: {
    type: String,
    enum: ['front-end', 'back-end', 'graphic design']
  }
})

exports.UserModel = mongoose.model('users', userSchema)
