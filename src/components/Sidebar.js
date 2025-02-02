// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#" className="brand-link">
        <span className="brand-text font-weight-light">AdminLTE</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/diagram" className="nav-link">
                <i className="nav-icon fas fa-chart-bar" />
                <p>Charts</p>
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
