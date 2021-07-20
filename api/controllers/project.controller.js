const  { projectModel } = require('../models/project.model')

exports.getAllProjects = (req, res) => {
  projectModel
    .find()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => { res.json(err) })
}


exports.addProject = (req, res) => {
  projectModel
    .create(req.body)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => { res.json(err)})
}


exports.getProjectById = (req, res) => {
  projectModel
    .findById(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => { res.json(err) })
}


exports.updateProjectById = (req, res) => {
  projectModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {res.json(err)})
}


exports.deleteProjectById = (req, res) => {
  projectModel
    .findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => { res.json(err) })
}