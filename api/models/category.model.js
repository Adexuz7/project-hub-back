const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required']
  }
})

exports.CategoryModel = mongoose.model('categories', categorySchema)
