import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Public from './components/Public'
import { UserContext } from './context/UserProvider'

export default function App() {
    const { token, logout } = useContext(UserContext)
    return (
        <div>
            <Navbar logout={logout} />
            <Routes>
                <Route path="/" element={ token ? <Navigate to="/profile/" /> : <Auth />} />

                <Route path="/profile" element={ <Profile />}/>

                <Route path="/public" element={ <Public />}/>
            </Routes>
        </div>
    )
}