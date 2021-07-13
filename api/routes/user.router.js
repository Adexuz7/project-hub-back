const userRouter = require('express').Router()
// const { checkAuth } = require('../../utils')
const {
  getAllUsers,
  getUser,
  createUser
} = require('../controllers/user.controller')

userRouter
  .get('/', getAllUsers)
  .get('/:userId', getUser)
  .post('/',createUser)

exports.userRouter = userRouter
