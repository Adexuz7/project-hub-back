const { UserModel } = require('../models/user.model')

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}, { email: 0, password: 0 })
      .populate('ideas', 'name')
      .populate('teams', 'name')

    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId, { email: 0, password: 0 })
      .populate('ideas', 'name')
      .populate('teams', 'name')

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getUsersByQuery = async (req, res) => {
  try {
    if (req.query.input.length > 0) {
      const users = await UserModel.find({
        userName: {
          $regex: `.*${req.query.input}.*`, $options: 'i'
        }
      }, 'userName')
      res.status(200).json(users)
    } else {
      res.status(200).json([])
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.findUserBySpecialty = async (req, res) => {
  try {
    console.log(req.params)
    const usersBySpecialty = await UserModel.find({ specialty: req.params.specialty })
    res.status(200).json(usersBySpecialty)
  } catch (err) { res.status(500).json(err) }
}
