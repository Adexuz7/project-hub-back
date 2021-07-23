const router = require('express').Router()

const { deleteComment } = require('../controllers/comment.controller')
const { checkAuth } = require('../utils/index')

const {
  getAllProjects,
  addProject,
  getProjectById,
  updateProjectById,
  deleteProjectById,
  addLikes,
  commentProject
//  deleteComment
} = require('../controllers/project.controller')

router.get('/', getAllProjects)
router.get('/:id', getProjectById)
router.post('/', addProject)
router.post('/:id/comments', commentProject)
router.put('/likes/:projectId', checkAuth, addLikes)
router.put('/:id', updateProjectById)
router.delete('/:id', deleteProjectById)
router.delete('/:projectId/comments/:commentId', deleteComment)

exports.projectRouter = router
