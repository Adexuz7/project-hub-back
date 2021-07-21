const { IdeaModel } = require('../models/idea.model')

exports.getAllIdeas = (req, res) => {
  IdeaModel
    .find()
    .then(ideas => res.status(200).json(ideas))
    .catch(err => res.status(500).json(err))
}

exports.getIdea = (req, res) => {
  IdeaModel
    .findById(req.params.id)
    .then(idea => res.status(200).json(idea))
    .catch(err => res.status(500).json(err))
}

exports.createNewIdea = (req, res) => {
  const user = res.locals.user
  const request = req.body

  request.author = user.id
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

exports.addLikesIdea = async (req, res) => {
  console.log(req.params.ideaId)
  const newIdea = await IdeaModel.findById(req.params.ideaId)

  if (!newIdea.likes.includes(res.locals.user._id)) {
    newIdea.likes.push(res.locals.user._id)
  } else {
    newIdea.likes.splice(newIdea.likes.indexOf(res.locals.user._id), 1)
  }

  await newIdea.save()

  res.status(200).json(newIdea)
}