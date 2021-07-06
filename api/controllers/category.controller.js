const { CategoryModel } = require('../models/category.model')

exports.getAllCategories = (req, res) => {
  CategoryModel
    .find()
    .then(categories => res.status(200).json(categories))
    .catch(err => res.status(500).json(err))
}
