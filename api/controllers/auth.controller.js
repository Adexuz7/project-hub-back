const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserModel } = require('../models/user.model')

exports.signup = (req, res) => {
  const hashedPwd = bcrypt.hashSync(req.body.password, 10)

  UserModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        res.status(409).json('Email already exists. Try another one')
      } else {
        UserModel
          .create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPwd
          })
          .then(user => {
            const userData = {
              id: user.id,
              name: user.name,
              email: user.email
            }

            const token = jwt.sign(
              userData,
              process.env.SECRET,
              { expiresIn: '7d' }
            )
            return res.json({ token: token, ...userData })
          })
          .catch(err => res.status(500).json(err.message))
      }
    })
    .catch(err => res.status(500).json(err))
}

exports.login = (req, res) => {
  UserModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user) res.status(404).send('User not found')
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (!result) {
            return res.status(403).json('Wrong email or password')
          }
          const userData = {
            id: user.id,
            name: user.name,
            email: user.email
          }

          const token = jwt.sign(
            userData,
            process.env.SECRET,
            { expiresIn: '7d' }
          )
          return res.json({ token: token, ...userData })
        })
      }
    })
    .catch(err => res.json(err))
}

exports.whoami = (req, res) => {
  res.json({
    id: res.locals.user.id,
    name: res.locals.user.name,
    email: res.locals.user.email
  })
}
