const router = require('express').Router()

const { categoryRouter } = require('./category.router')
const { projectRouter } = require('./project.router')

router
  .use('/categories', categoryRouter)
  .use('/projects', projectRouter)

exports.router = router
