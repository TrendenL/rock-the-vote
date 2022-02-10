import React, { useState, useContext } from 'react'
import axios from 'axios'
import { IssueContext } from './IssueProvider'
export const UserContext = React.createContext()

export default function UserProvider(props) {
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "",
    }

    const [ userState, setUserState ] = useState(initState)

    const { getUserIssues, issues } = useContext(IssueContext)

    // signup
    function signup(credentials){
        axios.post("/auth//signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                token,
                user
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // login
    function login(credentials){
        axios.post("/auth//login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            // getUserIssues()
            // setUserState(prevUserState => ({
            //     ...prevUserState,
            //     token,
            //     user
            // }))

            setUserState(prevUserState=> {
            const userIssues = issues.filter(issue => issue._id === user._id)

                return { 
                    ...prevUserState,
                    token, 
                    user,
                    issues: []
                }
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // logout
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: "",
            token: "",
            issues: []
        })
    }

    return (
        <div>
            <UserContext.Provider
                value={{
                    ...userState,
                    signup,
                    login,
                    logout
                }}>
                { props.children }
            </UserContext.Provider>
        </div>
    )
}
