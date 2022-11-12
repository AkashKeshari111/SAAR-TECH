import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminAddProducts } from '../Pages/AdminPages/AdminAddProducts'
import { AdminEdit } from '../Pages/AdminPages/AdminEdit'
import { AdminHome } from '../Pages/AdminPages/AdminHome'
import { AdminProducts } from '../Pages/AdminPages/AdminProducts'
import HomePage from '../Pages/Home/HomePage'

import CartAdd from '../Pages/Cart/CartAdd'

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


    <Route path='/adminHome' element={<AdminHome/>} />
    <Route path='/adminproducts' element={<AdminProducts/>} />
    <Route path='/adminaddproducts' element={<AdminAddProducts/>} />
    <Route path='/adminedit/:id' element={<AdminEdit/>} />


  </Routes>
  )
}

export default AllRoutes