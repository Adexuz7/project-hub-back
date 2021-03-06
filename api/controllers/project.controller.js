const { projectModel } = require('../models/project.model')

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.find().populate('categories')
    res.status(200).json(projects)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.addProject = async (req, res) => {
  console.log(req.body)
  try {
    const newProject = await projectModel.create(req.body)

    res.status(200).json(newProject)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getProjectById = async (req, res) => {
  try {
    const project = await projectModel.findById(req.params.id)
      .populate('categories')
      .populate('ideas')
      .populate('team')
      .populate({
        path: 'comments',
        populate: {
          path: 'author',
          select: 'name image'
        }
      })

    res.status(200).json(project)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.updateProjectById = async (req, res) => {
  try {
    const project = await projectModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(project)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.deleteProjectById = async (req, res) => {
  try {
    const project = await projectModel.findByIdAndRemove(req.params.id)

    res.status(200).json(project)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.addLikes = async (req, res) => {
  try {
    const newProject = await projectModel.findById(req.params.projectId).populate('categories')

    if (!newProject.likes.includes(res.locals.user._id)) {
      newProject.likes.push(res.locals.user._id)
    } else {
      newProject.likes.splice(newProject.likes.indexOf(res.locals.user._id), 1)
    }

    await newProject.save()
    res.status(200).json(newProject)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

exports.commentProject = async (req, res) => {
  try {
    const project = await projectModel.findById(req.params.id)
    const comment = {
      comment: req.body.comment,
      author: res.locals.user._id,
      date: new Date()
    }

    project.comments.push(comment)
    await project.save()

    res.status(200).json(project)
  } catch (err) {
    res.status(500).json(err)
  }
}
