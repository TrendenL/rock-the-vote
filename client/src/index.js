import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import UserProvider from './context/UserProvider'
import IssueProvider from './context/IssueProvider'

ReactDOM.render(
    <BrowserRouter>
        <IssueProvider>
                <UserProvider>
                    <App />
                </UserProvider>
        </IssueProvider>
    </BrowserRouter>
    , document.getElementById('root'))