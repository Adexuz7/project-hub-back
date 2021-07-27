const router = require('express').Router()
const { checkAuth } = require('../utils/index')

const {
  createTeam,
  getTeamByUserId,
  addMyselfToTeam,
  getTeamById,
  leaveTeam
} = require('../controllers/team.controller')

router.get('/:teamId', getTeamById)
router.get('/')
router.post('/', checkAuth, createTeam)
router.put('/:teamId', checkAuth, addMyselfToTeam)
router.put('/', checkAuth, leaveTeam)

exports.teamRouter = router
