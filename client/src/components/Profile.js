import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { IssueContext } from '../context/IssueProvider'
import IssueForm from './IssueForm'
import IssueList from './IssueList'

export default function Profile() {
    const { user: { username } } = useContext(UserContext)
    const { postIssue, issues, } = useContext(IssueContext)


    

    return (
        <div>
            <h1>Welcome@{ username }</h1>
            <h3>Post an Issue</h3>
            <IssueForm postIssue={postIssue}/>
            <h3>My Issues</h3>
            <IssueList issues={issues}/>
            
        </div>
    )
}

