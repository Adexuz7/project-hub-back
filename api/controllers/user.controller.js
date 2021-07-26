const { UserModel } = require('../models/user.model')

exports.getAllUsers = (req, res) => {
  UserModel
    .find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err))
}

exports.getUser = (req, res) => {
  UserModel
    .findById(req.params.userId).populate('ideas')
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
}

exports.createUser = (req, res) => {
  console.log('uwu', req.body)
  UserModel
    .create(req.body)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
}
