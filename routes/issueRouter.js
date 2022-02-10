const express = require('express')
const issueController = require('../controllers/issueController')
const issueRouter = express.Router()

// get all issues
issueRouter.get("/", issueController.issue_index)

// get user issues
issueRouter.get("/user", issueController.user_issues)

// post issue
issueRouter.post("/", issueController.issue_post)

// put issue (update)
issueRouter.put("/:issueId", issueController.issue_update)

// delete issue
issueRouter.delete("/:issueId", issueController.issue_delete)

module.exports = issueRouter