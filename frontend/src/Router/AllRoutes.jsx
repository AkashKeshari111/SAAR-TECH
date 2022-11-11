import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import AdminLogin from "../Pages/Login/AdminLogin"
import UserLogin from "../Pages/Login/UserLogin.jsx"
import AdminRegister from "../Pages/Signup/AdminRegister.jsx"
import UserRegister from "../Pages/Signup/UserRegister.jsx"



const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/AdminLogin" element={<AdminLogin/>}/>
    <Route path="/UserLogin" element={<UserLogin/>}/>
    <Route path="/AdminRegister" element={<AdminRegister/>}/>
    <Route path="/UserRegister" element={<UserRegister/>}/>
  </Routes>
  )
}

export default AllRoutes