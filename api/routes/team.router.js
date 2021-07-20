const router = require('express').Router()
const { checkAuth } = require('../utils/index')

const{
  createTeam,
  addMemberToTeam,
  getTeamById,
  leaveTeam
}=require('../controllers/team.controller')

router.get('/:teamId', getTeamById)
router.post('/', createTeam)
router.put('/:teamId', checkAuth, addMemberToTeam)
router.put('/',leaveTeam)


exports.teamRouter = router