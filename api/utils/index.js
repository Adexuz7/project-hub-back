const jwt = require('jsonwebtoken')
const { UserModel } = require('../models/user.model')

exports.checkAuth = (req, res, next) => {
  jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET, (err, token) => {
    if (err) res.status(403).json('Token not valid')

    UserModel
      .findOne({ email: token.email }).populate('ideas')
      .populate('teams')
      .then(user => {
        if (user) {
          res.locals.user = user
          next()
        } else {
          res.json('Token not valid')
        }
      })
  })
}
