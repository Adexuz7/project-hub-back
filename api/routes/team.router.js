const router = require('express').Router()
const { checkAuth } = require('../utils/index')

const {
  createTeam,
  addMyselfToTeam,
  getTeamById,
  leaveTeam
} = require('../controllers/team.controller')

router.get('/:teamId', getTeamById)
router.post('/', checkAuth, createTeam)
router.put('/:teamId', checkAuth, addMyselfToTeam)
router.put('/', checkAuth, leaveTeam)

exports.teamRouter = router
