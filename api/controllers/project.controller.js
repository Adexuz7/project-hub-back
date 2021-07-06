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


// function updateProject () => {}


// function deleteProject () => {}