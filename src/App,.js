/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import AuthLayout from "layouts/Auth.js";
import Admin from 'layouts/Admin';
import Preferences from 'pages/Preferences';

function App() {
    return (
        <div className="wrapper">
          <BrowserRouter>
            <Routes>
                //Login page
                <Route path="/auth/*" element={<AuthLayout />} />
                <Route path="*" element={<Navigate to="/auth/login" replace />} />

                //Admin page
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/admin" element={<Navigate to="/admin/index" replace />} />

                //Preferences page
                <Route path="/preferences" element={<Preferences/>} />
            </Routes>
          </BrowserRouter>
        </div>
      );
}

export default App;