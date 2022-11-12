import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'

import CartAdd from '../Pages/Cart/CartAdd'

import AdminLogin from "../Pages/Login/AdminLogin"
import UserLogin from "../Pages/Login/UserLogin.jsx"
import AdminRegister from "../Pages/Signup/AdminRegister.jsx"
import UserRegister from "../Pages/Signup/UserRegister.jsx"
import Add from '../Pages/Add to cart/Add'




const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/AdminLogin" element={<AdminLogin/>}/>
    <Route path="/UserLogin" element={<UserLogin/>}/>
    <Route path="/AdminRegister" element={<AdminRegister/>}/>
    <Route path="/UserRegister" element={<UserRegister/>}/>
    <Route path="/cart" element={<Add/>}/>

  </Routes>
  )
}

export default AllRoutes