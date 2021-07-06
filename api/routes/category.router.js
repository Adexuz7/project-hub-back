const categoryRouter = require('express').Router()

const {
  getAllCategories
} = require('../controllers/category.controller')

categoryRouter
  .get('/', getAllCategories)

exports.categoryRouter = categoryRouter
