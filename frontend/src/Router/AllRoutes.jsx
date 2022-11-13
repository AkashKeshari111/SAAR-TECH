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
import Addto from '../Pages/single/Addto'
import {CartProvider} from "react-use-cart"
import Checkout from '../Pages/Checkout/Checkout'
import Thanku from '../Pages/Thanku/Thanku'




const AllRoutes = () => {
  return (

    <>
    <Navbar/>
    <Routes>
    <Route path="/cart" element={<Add/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/AdminLogin" element={<AdminLogin/>}/>
    <Route path="/UserLogin" element={<UserLogin/>}/>
    <Route path="/AdminRegister" element={<AdminRegister/>}/>
    <Route path="/UserRegister" element={<UserRegister/>}/>
    <Route path="/products" element={<MensFasion/>}/> 
    
  </Routes>
  <CartProvider>
    <Routes>
    <Route path="/products/:id" element={<Singleproduct/>}/>
    </Routes>
    <Routes>
    <Route path="/addcart" element={<Addto/>}/>
    </Routes>
    <Routes>
    <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    <Routes>
    <Route path="/thanku" element={<Thanku/>}/>

    </Routes>
    
    </CartProvider>
  <Footer />
    </>

  
  )
}

export default AllRoutes