const router =require('express').Router()

const{
  createTeam,
  addMemberToTeam,
  getTeamById,
  leaveTeam
}=require('../controllers/team.controller')

router.get('/:teamId', getTeamById)
router.post('/', createTeam)
router.put('/',addMemberToTeam)
router.put('/',leaveTeam
)

exports.teamRouter = router