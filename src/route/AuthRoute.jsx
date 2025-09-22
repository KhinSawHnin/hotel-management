import React from 'react'
import { useSelector } from 'react-redux';
import LoginPage from '../auth/pages/LoginPage';
/*************  ✨ Windsurf Command 🌟  *************/
const AuthRoute = () => {
//   const accessToken = useSelector((state) => state.auth.accessToken);


//     if (accessToken) {
//     return <Navigate to="/dashboard" replace />;
//   }

  return <LoginPage />;
}
/*******  b2b145f1-b2db-4536-ab2b-13b9eddda2bb  *******/

export default AuthRoute