const { IdeaModel } = require('../models/idea.model')

exports.getAllIdeas = async (req, res) => {
  try{
    const ideas = await IdeaModel.find()

    res.status(200).json(ideas)
  }catch(err){
    res.status(500).json(err)
  } 
}

exports.getIdea = async (req, res) => {
  try{
    const idea = await IdeaModel.findById(req.params.id)
     res.status(200).json(idea)
     
    }catch(err){
      res.status(500).json(err)
    } 
}

exports.createNewIdea = async(req, res) => {
  try{
    const user = res.locals.user
    const request = req.body
  
    request.author = user.id
    request.date = new Date()
  
    const idea = await IdeaModel.create(request)
        user.ideas.push(idea.id)
        user.save()
        res.status(200).json(idea)
      }catch(err) {
        res.status(500).json(err)
      }

  }



exports.addLikesIdea = async (req, res) => {
 try{
    const newIdea = await IdeaModel.findById(req.params.ideaId)
  
    if (!newIdea.likes.includes(res.locals.user._id)) {
      newIdea.likes.push(res.locals.user._id)
    } else {
      newIdea.likes.splice(newIdea.likes.indexOf(res.locals.user._id), 1)
    }
  
    await newIdea.save()
  
    res.status(200).json(newIdea)
  }catch(err){
    res.status(500).json(err)
  }
}