
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const ProtectedRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let authenticated = localStorage.getItem('authenticated')
    if (!authenticated) {
      navigate('/login')
    }
  }, [])
  return (
    <div>
      <Component />
    </div>
  )
}




// ProtectedRoute.js
// import React from 'react';
// import { Route, Redirect, useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Import your authentication context or logic

// export const ProtectedRoute = ({ component: Component, ...rest }) => {
//   // const { state } = useAuth(); // Access the authentication state from your context
// var navigate = useNavigate()
// var isAuthenticated = localStorage.getItem("isAuthenticated")
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           // <Redirect to="/login" />
//           <>{navigate("/login")}</>
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;

// import { Outlet } from "react-router-dom";
// import { Login } from "./Login";

// const useAuth = () => {
//   var flag = localStorage.getItem("userId") ? true : false;
//   return flag;
// };

// export const ProtectedRoutes = () => {
//   const flag = useAuth();

//   return flag ? <Outlet /> : <Login />;
// };
