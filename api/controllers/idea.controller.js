const { IdeaModel } = require('../models/idea.model')

exports.getAllIdeas = (req, res) => {
  IdeaModel
    .find()
    .then(ideas => res.status(200).json(ideas))
    .catch(err => res.status(500).json(err))
}
