// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#f8f9fa', padding: '10px' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/diagram">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;