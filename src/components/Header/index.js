import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { TiThMenu, TiMessageTyping } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import Calender from '../Calender/Calender';
import Statistic from '../Statics/Statistic';
import Employee from '../Employee/Employee';

const Header = () => {
  return (
    <header className='d-flex align-items-center header'>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo Wrapper */}
          <div className="col-6 col-md-2 d-flex align-items-center">
            <Link to={'/'} className='d-flex align-items-center logo'>
              <img src={logo} alt="Logo" />
              <span>Celestial</span>
            </Link>
            <button className='rounded-circle menu-button mx-2 d-md-none'><TiThMenu /></button>
          </div>

          {/* Middle Section */}
          <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
            <Calender />
            <Statistic />
            <Employee />
          </div>

          {/* End Section */}
          <div className="col-6 col-md-4 d-flex justify-content-end align-items-center">
            <button className='rounded-circle mx-2'>Help</button>
            <button className='rounded-circle mx-2'><TiMessageTyping /></button>
            <button className='rounded-circle mx-2'><IoNotificationsOutline /></button>
            <button className='rounded-circle mx-2 d-none d-md-block'><FaRegUser /> Evan Morales</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
