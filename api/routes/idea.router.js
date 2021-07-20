const ideaRouter = require('express').Router()
const { checkAuth } = require('../utils')

const {
  getAllIdeas,
  getIdea,
  createNewIdea
} = require('../controllers/idea.controller')

ideaRouter
  .get('/', getAllIdeas)
  .get('/:id', getIdea)
  .post('/', checkAuth, createNewIdea)

exports.ideaRouter = ideaRouter
