const router = require('express').Router()
const { checkAuth } = require('../utils/index')

const {
  createTeam,
  getTeamByUserId,
  getTeamById,
  addMemberToTeam,
  getAllTeams
} = require('../controllers/team.controller')

router.get('/', checkAuth, getTeamByUserId)
router.get('/all', getAllTeams)
router.get('/:teamId', checkAuth, getTeamById)
router.put('/:teamId/users/:userName', checkAuth, addMemberToTeam)
router.post('/', checkAuth, createTeam)

exports.teamRouter = router
