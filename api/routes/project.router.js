const router = require('express').Router();

const {
  getAllProjects,
  addProject,
  getProjectById,
  updateProjectById

} = require('../controllers/project.controller')

router.get('/', getAllProjects)
router.post('/', addProject)
router.get('/:id', getProjectById)
router.put('/:id', updateProjectById)

exports.projectRouter = router