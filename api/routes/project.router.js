const router = require('express').Router();

const { createComment } = require('../controllers/comment.controller');
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
router.post('/:id/comments', createComment)

exports.projectRouter = router