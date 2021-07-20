// const Comment = require('../models/comment.model')
const { projectModel } = require('../models/project.model')

exports.createComment = (req, res) => {
  projectModel
    .findById(req.params.id)
    .then((project) => {
      const comment = {
        comment: req.body.comment,
        author: req.body.authorId,
        date: new Date()
      }
      project.comments.push(comment)
      project.save(err => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).json(project)
        }
      })
    })
    .catch((err) => { res.json(err) })
}

exports.deleteComment = (req, res) => {
  projectModel
    .findById(req.params.projectId)
    .then((project) => {
      project.comments.remove(req.params.commentId)
      project.save()
        .then(result => { res.status(200).json(result) })
        .catch(err => { res.status(500).json(err) })
    })
    .catch((err) => { res.json(err) })
}

// exports.updateComment = () => {}
