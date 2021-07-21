const { projectModel } = require('../models/project.model')

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
    .catch((err) => { res.json(err) })
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
    .catch((err) => { res.json(err) })
}

exports.deleteProjectById = (req, res) => {
  projectModel
    .findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => { res.json(err) })
}

exports.addLikes = async (req, res) => {
  const newProject = await projectModel.findById(req.params.projectId)

  if (!newProject.likes.includes(res.locals.user._id)) {
    newProject.likes.push(res.locals.user._id)
  } else {
    newProject.likes.splice(newProject.likes.indexOf(res.locals.user._id), 1)
  }

  await newProject.save()

  res.status(200).json(newProject)
}
