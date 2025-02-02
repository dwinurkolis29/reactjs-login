// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DiagramPage from './pages/DiagramPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/diagram" element={<DiagramPage />} />
      </Routes>
    </Router>
  );
}

export default App;
