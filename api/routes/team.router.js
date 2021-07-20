const router = require('express').Router()
const { checkAuth } = require('../utils/index')

const{
  createTeam,
  addMyselfToTeam,
  getTeamById,
  leaveTeam
}=require('../controllers/team.controller')

router.get('/:teamId', getTeamById)
router.post('/', createTeam)
router.put('/:teamId', checkAuth, addMyselfToTeam)
router.put('/',leaveTeam)


exports.teamRouter = router