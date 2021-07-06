const router = require('express').Router();

const {
  getAllProjects,
  addProject

} = require('../controller/project.controller')

router.get('/', getAllProjects)
router.post('/', addProject)

exports.projectRouter = router