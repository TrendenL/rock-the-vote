import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const IssueContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function IssueProvider(props) {

    const initIssue = {
        issues: []
    }

    const [ issueState, setIssueState ] = useState(initIssue)

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        issues: []
    }

    const [ userState, setUserState ] = useState(initState)

    // Get all issues
    function getIssues(){
        userAxios.get("/api/issue")
        .then(res => setIssueState(prevState => ({
            ...prevState,
            issues: res.data
        })))
        .catch(err => console.log(err.response.data.errMsg))
    }

    // Get user issues
    function getUserIssues(){
        userAxios.get("/api/issue/user")
        .then(res => setUserState(prevState => ({
            ...prevState,
            issues: res.data
        })))
        .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(() => {
        getIssues()
    },[])

    // Post issue
    function postIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <div>
            <IssueContext.Provider
                value={{
                    ...userState,
                    getUserIssues,
                    postIssue,
                    getIssues,
                    issueState
                }}>
                {props.children}
            </IssueContext.Provider>
            
        </div>
    )
}


// Issues :
// Get issues - X
// Get user issues - X
// Post issue - X
// Delete issue
// Update issue

// Comments:
// Get comments to issue
// Post comment to issue
// Delete comment
// Update comment
