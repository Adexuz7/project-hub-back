const router = require('express').Router()

const { categoryRouter } = require('./category.router')
const { ideaRouter } = require('./idea.router')
const { projectRouter } = require('./project.router')

router
  .use('/categories', categoryRouter)
  .use('/ideas', ideaRouter)
  .use('/projects', projectRouter)

exports.router = router
