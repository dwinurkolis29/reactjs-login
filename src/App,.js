/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import AuthLayout from "layouts/Auth.js";
import Admin from 'layouts/Admin';
import Preferences from 'pages/Preferences';
import Login from "pages/Login";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const [token, setToken] = useState();

  console.log("token : "+ token);
  if (!token) {
    return <Login setToken={setToken} />;
  }
  
    return (
        <div className="wrapper">
          <BrowserRouter>
            <Routes>
                //Login page
                {/* <Route path="/auth/*" element={<AuthLayout />} />
                <Route path="*" element={<Navigate to="/auth/login" replace />} /> */}

                //Admin page
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/admin" element={<Navigate to="/admin/index" replace />} />

                //Preferences page
                <Route path="/preferences" element={<Preferences/>} />
                <Route path="preferences/" element={<Navigate to="/preferences/index" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
      );
}

export default App;