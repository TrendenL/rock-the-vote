const express = require('express')
const issueContoller = require('../controllers/issueController')
const issueRouter = express.Router()

// get all issues
issueRouter.get("/", issueContoller.issue_index)

// get user issues
issueRouter.get("/user", issueContoller.user_issues)

// post issue
issueRouter.post("/", issueContoller.issue_post)

// put issue (update)
issueRouter.put("/:issueId", issueContoller.issue_update)

// delete issue
issueRouter.delete("/:issueId", issueContoller.issue_delete)

module.exports = issueRouter