const { issuesModel } = require('../models/issues.model')

exports.createIssue = (req,res) => {
  try {
    const issue = await issuesModel.create(req.body)
    res.status(200).json(issue)
  }catch(err){
    res.status(500).json(err)
  }
}
