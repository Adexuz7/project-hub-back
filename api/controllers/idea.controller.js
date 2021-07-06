const { IdeaModel } = require('../models/idea.model')

exports.getAllIdeas = (req, res) => {
  IdeaModel
    .find()
    .then(ideas => res.status(200).json(ideas))
    .catch(err => res.status(500).json(err))
}

exports.createNewIdea = (req, res) => {
  const user = res.locals.user
  const request = req.body

  request.author = user._id
  request.date = new Date()

  IdeaModel
    .create(request)
    .then(idea => {
      user.ideas.push(idea.id)
      user.save()
      res.status(200).json(idea)
    })
    .catch(err => res.status(500).json(err))
}
