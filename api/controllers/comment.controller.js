const Comment = require('../models/comment.model')
const Project = require('../models/project.model')

exports.createComment = (req, res) => {
  Project.findById(req.params.id)
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

      // Project.update({
      //   _id: project._id
      // }, {$push:{comments: {
      //   comment: req.body.comment,
      //   author: req.body.authorId,
      //   date: new Date()
      // }}})
      // console.log('project after update: ', project)

    })
    .catch((err) => {
      console.log('Error')
      res.json(err)
    })
}

// exports.updateComment = () => {}

// exports.deleteComment = () => {}


exports.updateProjectById = (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log('Error')
      res.json(err)
    })
}