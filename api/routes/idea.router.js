const ideaRouter = require('express').Router()
const { checkAuth } = require('../utils')

const {
  getAllIdeas,
  createNewIdea
} = require('../controllers/idea.controller')

ideaRouter
  .get('/', getAllIdeas)
  .post('/', checkAuth, createNewIdea)

exports.ideaRouter = ideaRouter
