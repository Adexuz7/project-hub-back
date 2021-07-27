const router = require('express').Router()
const { checkAuth } = require('../utils/index')

const {
  createTeam,
  getTeamByUserId,
  getTeamById,
  addMemberToTeam
} = require('../controllers/team.controller')

router.get('/', checkAuth, getTeamByUserId)
router.get('/:teamId', checkAuth, getTeamById)
router.put('/:teamId/users/:userId', checkAuth, addMemberToTeam)
router.post('/', checkAuth, createTeam)

exports.teamRouter = router
