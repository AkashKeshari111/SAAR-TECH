import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import AdminLogin from "../Pages/Home/AdminLogin"
import UserLogin from "../Pages/Home/UserLogin.jsx"
import AdminRegister from "../Pages/Home/AdminRegister.jsx"
import UserRegister from "../Pages/Home/UserRegister.jsx"
import MensFasion from "../Pages/product/MensFasion"
import Singleproduct from '../Pages/single/singleproduct'


const AllRoutes = () => {
  return (
  <Routes>
    {/* <Route path="/" element={<HomePage/>}/>
    <Route path="/AdminLogin" element={<AdminLogin/>}/>
    <Route path="/UserLogin" element={<UserLogin/>}/>
    <Route path="/AdminRegister" element={<AdminRegister/>}/>
    <Route path="/UserRegister" element={<UserRegister/>}/> */}
    {/* <Route path="/products" element={<MensFasion/>}/> */}
    {/* <Route path="/products/:id" element={<Singleproduct/>}/> */}
  </Routes>
  
  )
}

export default AllRoutes