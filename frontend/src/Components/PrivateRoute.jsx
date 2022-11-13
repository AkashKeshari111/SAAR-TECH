import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);


  if (!isAuth) {
    return <Navigate to="/login" replace state={{data:location.pathname}}></Navigate>;
  }
  return children;
};

export default PrivateRoute;