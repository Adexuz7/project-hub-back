const { findByIdAndUpdate, findById } = require('../models/project.model')
const { TeamModel } = require('../models/team.model')


exports.createTeam = (req, res) =>  {
  TeamModel
    .create(req.body)
    .then(team => res.status(200).json(team))
    .catch(err => res.status(500).json(err))
}

exports.addMemberToTeam = (req, res) => {
  TeamModel
    .findOneAndUpdate(req.params.teamId)
    .then(team => {
      if (team.members.includes(res.locals.user.id)){
        return res.status(200).json('User alreay in team')
      }else if(team.members.includes(res.locals.user.id) === false){
        team.members.push(res.locals.user.id)
        team.save()
        return res.status(200).json('User added')
      }
    })
    .catch(err => res.status(500).json(err))   
}

exports.leaveTeam = (req,res) => {
  TeamModel
    .findOneAndUpdate(res.locals.user.id, {$pull:{members: res.locals.user.id}, new:true})
    .then(team => res.status(200).send('You leave the team'))
    .catch(err => res.status(500).json(err))
}

exports.getTeamById = (req, res) => {
  TeamModel
    .findById(req.params.teamId)
    .then(team => res.status(200).json(team))
    .catch(err => res.status(500).json(err))
}