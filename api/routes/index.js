const router = require('express').Router()
const { authRouter } = require('./auth.router')
const { categoryRouter } = require('./category.router')
const { ideaRouter } = require('./idea.router')
const { projectRouter } = require('./project.router')
const { userRouter } = require('./user.router')

router
  .use('/auth', authRouter)
  .use('/categories', categoryRouter)
  .use('/ideas', ideaRouter)
  .use('/projects', projectRouter)
  .use('/users', userRouter)

exports.router = router
