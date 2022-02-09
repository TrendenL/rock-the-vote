const express = require('express')
const commentRouter = express.Router({mergeParams: true})
const commentController = require('../controllers/commentController')

commentRouter.get("/", commentController.comment_index)

commentRouter.get("/:issueId", commentController.comment_index)

commentRouter.post("/:issueId", commentController.comment_post)

module.exports = commentRouter