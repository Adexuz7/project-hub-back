const { CategoryModel } = require('../models/category.model')

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find()

    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.categoryId)
    res.status(200).json(category)
  } catch (err) {
    res.status(500).json(err)
  }
}
