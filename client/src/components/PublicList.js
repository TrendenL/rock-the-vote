import React, { useContext } from 'react'
import PublicIssue from './PublicIssue'
import { IssueContext } from '../context/IssueProvider'

export default function PublicList() {
    const { issueState: { issues } } = useContext(IssueContext)
    return (
        <div>
            { issues.map(issue => <PublicIssue {...issue} key={issue._id }/>)}
        </div>
    )
}
