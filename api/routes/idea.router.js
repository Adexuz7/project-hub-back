const ideaRouter = require('express').Router()

const {
  getAllIdeas
} = require('../controllers/idea.controller')

ideaRouter
  .get('/', getAllIdeas)

exports.ideaRouter = ideaRouter
