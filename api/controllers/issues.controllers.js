const { issuesModel } = require('../models/issues.model')

exports.createIssue = (req,res) => {
  issuesModel
    .create(req.body)
    .then(issue => res.status(200).json(issue))
    .catch(err => res.status(500).json(err))
}
