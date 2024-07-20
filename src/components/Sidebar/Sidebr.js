// src/components/Sidebar.js
import React from 'react';
import { FaHome, FaLayerGroup, FaWpforms, FaChartPie, FaTable } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <div className="search-box">
      <input type="text" placeholder="Type to search..." />
    </div>
<nav className="nav">
  <a href="/" className="nav-link active">
    <FaHome className="nav-icon" />
    <span>Dashboard</span>
  </a>
  <a href="/ui-elements" className="nav-link">
    <FaLayerGroup className="nav-icon" />
    <span>UI Elements</span>
  </a>
  <a href="/form-elements" className="nav-link">
    <FaWpforms className="nav-icon" />
    <span>Form Elements</span>
  </a>
  <a href="/charts" className="nav-link">
    <FaChartPie className="nav-icon" />
    <span>Charts</span>
  </a>
  <a href="/tables" className="nav-link">
    <FaTable className="nav-icon" />
    <span>Tables</span>
  </a>
</nav>

  </div>
);

export default Sidebar;
