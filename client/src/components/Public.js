import React, { useContext } from 'react'
import IssueForm from './IssueForm'
import { IssueContext } from '../context/IssueProvider'

export default function Public() {

    const { postIssue } = useContext(IssueContext)
    return (
        <div>
            <h1>Public</h1>
            <IssueForm postIssue={postIssue} />
        </div>
    )
}

