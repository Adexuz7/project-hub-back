const userRouter = require('express').Router()
// const { checkAuth } = require('../../utils')
const {
  getAllUsers,
  getUser
} = require('../controllers/user.controller')

userRouter
  .get('/', getAllUsers)
  .get('/:userId', getUser)

exports.userRouter = userRouter
