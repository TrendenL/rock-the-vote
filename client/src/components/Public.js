import React, { useContext } from 'react'
import IssueForm from './IssueForm'
import { IssueContext } from '../context/IssueProvider'
import PublicList from './PublicList'

export default function Public() {

    const { postIssue, issueState: {issues} } = useContext(IssueContext)

    // useEffect(() => {
    //     getIssues()
    // },[])

    console.log(issues)
    
    return (
        <div>
            <h1>Public</h1>
            <IssueForm postIssue={postIssue} />
            <PublicList issues={issues} />
        </div>
    )
}

