const router =require('express').Router()

const{
  createTeam,
  addMemberToTeam,
  getTeamByName
}=require('../controllers/team.controller')

router.get('/:teamId', getTeamByName)
router.post('/', createTeam)

exports.teamRouter = router