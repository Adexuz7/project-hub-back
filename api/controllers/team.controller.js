// const { findByIdAndUpdate, findById } = require('../models/project.model')
const { TeamModel } = require('../models/team.model')

exports.createTeam = async (req, res) => {
  const user = res.locals.user
  try {
    req.body.members.push(user._id)
    const team = await TeamModel.create(req.body)

    user.teams.push(team._id)
    await user.save()

    res.status(200).json(team)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.addMyselfToTeam = (req, res) => {
  TeamModel
    .findOneAndUpdate(req.params.teamId)
    .then(team => {
      if (team.members.includes(res.locals.user.id)) {
        return res.status(200).json('User alreay in team')
      } else if (team.members.includes(res.locals.user.id) === false) {
        team.members.push(res.locals.user.id)
        team.save()
        return res.status(200).json('User added')
      }
    })
    .catch(err => res.status(500).json(err))
}

exports.inviteMemberToTeam = (req, res) => {
  TeamModel
    .findOne(req.params.userName)
}

exports.leaveTeam = (req, res) => {
  TeamModel
    .findOneAndUpdate(res.locals.user.id)
    .then(team => res.status(200).send('You leave the team'))
    .catch(err => res.status(500).json(err))
}

exports.getTeamById = (req, res) => {
  TeamModel
    .findById(req.params.teamId)
    .then(team => res.status(200).json(team))
    .catch(err => res.status(500).json(err))
}
