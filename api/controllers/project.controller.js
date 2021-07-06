const Project = require('../models/project.model')

exports.getAllProjects = (req, res) => {
  Project.find()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log("Error")
      res.json(err)
    })
}


exports.addProject = (req, res) => {
  Project.create(req.body)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log('Error')
      res.json(err)
    })
}


exports.getProjectById = (req, res) => {
  Project.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log('Error')
      res.json(err)
    })
}


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


exports.deleteProjectById = (req, res) => {
  Project.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      conso.log('Error')
      res.json(err)
    })
}