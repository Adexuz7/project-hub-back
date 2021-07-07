const categoryRouter = require('express').Router()

const {
  getAllCategories,
  getCategory
} = require('../controllers/category.controller')

categoryRouter
  .get('/', getAllCategories)
  .get('/:categoryId', getCategory)

exports.categoryRouter = categoryRouter
