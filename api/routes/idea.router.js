const ideaRouter = require('express').Router()
const { checkAuth } = require('../utils')

const {
  getAllIdeas,
  getIdea,
  createNewIdea,
  addLikesIdea
} = require('../controllers/idea.controller')

ideaRouter
  .get('/', getAllIdeas)
  .get('/:id', getIdea)
  .post('/', checkAuth, createNewIdea)
  .put('/likes/:ideaId', checkAuth, addLikesIdea)

exports.ideaRouter = ideaRouter
