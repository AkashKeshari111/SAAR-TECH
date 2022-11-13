import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminAddProducts } from '../Pages/AdminPages/AdminAddProducts'
import { AdminEdit } from '../Pages/AdminPages/AdminEdit'
import { AdminHome } from '../Pages/AdminPages/AdminHome'
import { AdminProducts } from '../Pages/AdminPages/AdminProducts'
import PrivateRoute from "../Components/PrivateRoute"
import AdminProfile from "../Pages/Profile/AdminProfile"
import UserProfile from '../Pages/Profile/UserProfile'


export const AdminRoutes = () => {
  return (
    <Routes>
    <Route path='/adminHome' element={ <PrivateRoute>  <AdminHome/> </PrivateRoute>} /> 
    <Route path='/adminproducts' element={ <PrivateRoute> <AdminProducts/></PrivateRoute> } />
    <Route path='/adminaddproducts' element={ <PrivateRoute>  <AdminAddProducts/></PrivateRoute> } />
    <Route path='/adminedit/:id' element={ <PrivateRoute>  <AdminEdit/></PrivateRoute> } />
    <Route path='/adminProfile' element={    <AdminProfile/> } />
    {/* <Route path='/userProfile' element={    <UserProfile/> } /> */}


    </Routes>
  )
}
