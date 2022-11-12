import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import HomePage from '../Pages/Home/HomePage'
import MensFasion from "../Pages/product/MensFasion"
import Singleproduct from '../Pages/single/singleproduct'
import CartAdd from '../Pages/Cart/CartAdd'
import AdminLogin from "../Pages/Login/AdminLogin"
import UserLogin from "../Pages/Login/UserLogin.jsx"
import AdminRegister from "../Pages/Signup/AdminRegister.jsx"
import UserRegister from "../Pages/Signup/UserRegister.jsx"
import Add from '../Pages/Add to cart/Add'
import PrivateRoute from '../Components/PrivateRoute'





const AllRoutes = () => {
  return (

    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/AdminLogin" element={<AdminLogin/>}/>
    <Route path="/UserLogin" element={<UserLogin/>}/>
    <Route path="/AdminRegister" element={<AdminRegister/>}/>
    <Route path="/UserRegister" element={<UserRegister/>}/>
    <Route path="/products" element={<MensFasion/>}/> 
     <Route path="/products/:id" element={<Singleproduct/>}/>
     <Route path="/cart" element={ <PrivateRoute><Add/></PrivateRoute>}/>
  </Routes>
  <Footer />
    </>

  
  )
}

export default AllRoutes