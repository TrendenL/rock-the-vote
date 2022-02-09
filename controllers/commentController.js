const Comment = require('../models/comment')

const comment_index = (req, res, next) => {
    Comment.find((err, comment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
}

const comment_byId = (req, res, next) => {
    Comment.find({ issueId: req.params.issueId._id},(err, comment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
}

const comment_post = (req, res, next) => {
    req.body.userId = req.user._id
    req.body.issueId = req.params.issueId
    const comment = new Comment(req.body)
    comment.save((err, newComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newComment)
    })
}

module.exports = {
    comment_index,
    comment_post,
    comment_byId
}