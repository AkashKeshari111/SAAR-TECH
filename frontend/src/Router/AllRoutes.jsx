import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import HomePage from "../Pages/Home/HomePage";
import MensFasion from "../Pages/product/MensFasion";
import Singleproduct from "../Pages/single/singleproduct";

import AdminLogin from "../Pages/Login/AdminLogin";
import UserLogin from "../Pages/Login/UserLogin.jsx";
import AdminRegister from "../Pages/Signup/AdminRegister.jsx";
import UserRegister from "../Pages/Signup/UserRegister.jsx";

import Addto from "../Pages/single/Addto";
import { CartProvider } from "react-use-cart";
import Thanku from "../Pages/Thanku/Thanku";

import PrivateRoute from "../Components/PrivateRoute";
import PlaceOrder from "../Pages/PlaceOrder/PlaceOrder";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage /> <Footer />
            </>
          }
        />
        <Route path="/AdminLogin" element={ <> <Navbar /><AdminLogin /><Footer /></>} />
        <Route path="/UserLogin" element={<>  <Navbar /><UserLogin /><Footer /></>} />
        <Route path="/AdminRegister" element={ <> <Navbar /><AdminRegister /><Footer /></>} />
        <Route path="/UserRegister" element={<>  <Navbar /><UserRegister /><Footer /></>} />
        <Route path="/placeorder" element={<>  <Navbar /><PlaceOrder/><Footer /></>} />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <MensFasion /> <Footer />
            </>
          }
        />
      </Routes>
      <CartProvider>
        <Routes>
          <Route
            path="/products/:id"
            element={
              <>
                <Navbar />
                <Singleproduct />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/addcart"
            element={
              <>
                <Navbar />
                <Addto />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/thanku" element={<Thanku />} />
        </Routes>

      </CartProvider>

    </>
  );
};

export default AllRoutes;
