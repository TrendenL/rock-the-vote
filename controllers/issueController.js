const Issue = require('../models/issue')

const issue_index = (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
    // Issue.find().
    // populate('comments').
    // exec(function (err, issues) {
    // if (err) return next(err);
    // console.log('issues:', issues);
    // });
}

const user_issues = (req, res, next) => {
    Issue.find({user: req.user._id}, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
}

const issue_post = (req, res, next) => {
    req.body.user = req.user._id
    const issue = new Issue(req.body)
    issue.save((err, newIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newIssue)
    })
}

const issue_update = (req, res, next) => {
    Issue.findOneAndUpdate({_id: req.params.issueId, user: req.user._id }, req.body, {new: true}, (err, updatedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedIssue)
    })
}

const issue_delete = (req, res, next) => {
    Issue.findOneAndDelete({_id: req.params.issueId, user: req.user._id}, (err, deleteIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deleteIssue.title} issue!`)
    })
}

module.exports = {
    issue_index,
    user_issues,
    issue_post,
    issue_update,
    issue_delete
}