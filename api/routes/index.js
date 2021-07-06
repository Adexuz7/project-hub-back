const router = require('express').Router()

const { categoryRouter } = require('./category.router')

router
  .use('/categories', categoryRouter)

exports.router = router
