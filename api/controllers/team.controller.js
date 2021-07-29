const { TeamModel } = require('../models/team.model')
const { UserModel } = require('../models/user.model')

exports.getAllTeams = async (req, res) => {
  try {
    const allTeams = await TeamModel.find()
    res.status(200).json(allTeams)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.createTeam = async (req, res) => {
  const user = res.locals.user
  try {
    req.body.members = []
    req.body.members.push(user)

    const team = await TeamModel.create(req.body)

    user.teams.push(team._id)
    await user.save()

    res.status(200).json(team)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getTeamByUserId = async (req, res) => {
  try {
    const user = await res.locals.user.populate('teams')
    for (let i = 0; i < user.teams.length; i++) {
      const members = user.teams[i].members
      for (let j = 0; j < members.length; j++) {
        members[j] = await UserModel.findById(members[j])
      }
    }

    res.status(200).json(user.teams)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.addMemberToTeam = async (req, res) => {
  try {
    const { id } = await UserModel.findOne({ userName: req.params.userName }, '_id')
    const team = await TeamModel.findById(req.params.teamId)
    team.members.push(id)
    await team.save()
    res.status(200).json(team.members)
  } catch (err) { res.status(500).json(err) }
}

exports.getTeamById = (req, res) => {
  TeamModel
    .findById(req.params.teamId)
    .then(team => res.status(200).json(team))
    .catch(err => res.status(500).json(err))
}
