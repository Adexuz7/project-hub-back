const ideaRouter = require('express').Router()

const {
  getAllIdeas,
  createNewIdea
} = require('../controllers/idea.controller')

ideaRouter
  .get('/', getAllIdeas)
  .post('/', createNewIdea)

exports.ideaRouter = ideaRouter
