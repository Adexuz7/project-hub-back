const { UserModel } = require('../models/user.model')

exports.getAllUsers = async (req, res) => {
  try{
    const users = await UserModel.find()
    res.status(200).json(users)
  }catch(err){
    status(500).json(err)
  }
}

exports.getUser = async (req, res) => {
  try{
    const user = await UserModel.findById(req.params.userId)
    res.status(200).json(user)
  }catch(err){
    res.status(500).json(err)
  }
}

exports.createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(200).json(user)
  }catch(err){
    res.status(500).json(err)
  }
}
