const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
  email:{
    type: String,
    required: true,
    unique: true
  }

  password:{
    type: String,
    required:true
  }
  image:{
    type: String,
  }
  ideas:{
   type: Array,
  }
  followers:{
    type: Array,
  }
  follows:{
    type: Array
  }

})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel