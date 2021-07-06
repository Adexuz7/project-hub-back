const router = require('express').Router();

const {
  getAllProjects,
  addProject,
  getProjectById,
  updateProjectById,
  deleteProjectById

} = require('../controllers/project.controller')

router.get('/', getAllProjects)
router.post('/', addProject)
router.get('/:id', getProjectById)
router.put('/:id', updateProjectById)
router.delete('/:id', deleteProjectById)

exports.projectRouter = router