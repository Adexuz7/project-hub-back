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
    .findOneAndUpdate(res.locals.user.id, {$push:{ members: res.locals.user.id },new:true})
    .then(team => res.status(200).send('User added correctly'))
    .catch(err => res.status(500).json(err))   
}

exports.getTeamByName = (req, res) => {
  console.log('params', req)
  TeamModel
  .findById(req.params.teamId)
  .then(team => res.status(200).json(team))
  .catch(err => res.status(500).json(err))
}