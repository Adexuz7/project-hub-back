const ideaRouter = require('express').Router()
const { checkAuth } = require('../utils')

const {
  getAllIdeas,
  getIdea,
  createNewIdea,
  addLikesIdea,
  commentIdea,
  addProjectToIdea
} = require('../controllers/idea.controller')

ideaRouter
  .get('/', getAllIdeas)
  .get('/:id', getIdea)
  .post('/', checkAuth, createNewIdea)
  .post('/:id/comments', checkAuth, commentIdea)
  .post('/:ideaId/projects', checkAuth, addProjectToIdea)
  .put('/likes/:ideaId', checkAuth, addLikesIdea)

exports.ideaRouter = ideaRouter
