const router = require('express').Router();

const {
  getAllProjects,
  addProject,
  getProjectById

} = require('../controllers/project.controller')

router.get('/', getAllProjects)
router.post('/', addProject)
router.get('/:id', getProjectById)

exports.projectRouter = router