
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebr';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => (
  <Router>
    <Header />
    <div className="main-container d-flex">
      <Sidebar />
      <div className="content flex-grow-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
