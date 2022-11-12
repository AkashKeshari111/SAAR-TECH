import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminAddProducts } from '../Pages/AdminPages/AdminAddProducts'
import { AdminEdit } from '../Pages/AdminPages/AdminEdit'
import { AdminHome } from '../Pages/AdminPages/AdminHome'
import { AdminProducts } from '../Pages/AdminPages/AdminProducts'

export const AdminRoutes = () => {
  return (
    <Routes>
    <Route path='/adminHome' element={<AdminHome/>} />
    <Route path='/adminproducts' element={<AdminProducts/>} />
    <Route path='/adminaddproducts' element={<AdminAddProducts/>} />
    <Route path='/adminedit/:id' element={<AdminEdit/>} />
    </Routes>
  )
}
