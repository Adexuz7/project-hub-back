const userRouter = require('express').Router()
// const { checkAuth } = require('../../utils')
const {
  getAllUsers,
  getUser,
  createUser,
  findUserBySpecialty
} = require('../controllers/user.controller')

userRouter
  .get('/', getAllUsers)
  .get('/specialty/:specialty', findUserBySpecialty)
  .get('/:userId', getUser)
  .post('/', createUser)

exports.userRouter = userRouter
