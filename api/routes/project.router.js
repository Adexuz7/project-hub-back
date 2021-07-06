const router = require('express').Router();

const {
  getAllProjects

} = require('../controller/project.controller')

router.get('/', getAllProjects)

exports.projectRouter = router