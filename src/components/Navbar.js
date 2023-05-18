import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ fontFamily: 'Prima Sans BT' }}>
      <div className="navbar-logo">
        <img src={process.env.PUBLIC_URL + '/Logo.svg'} alt="Company Logo" />
      </div>
      <div className='navbar-left'>

      <div className="navbar-menu" >
        <Link to="/" className="navbar-link">HOME</Link> 
        <Link to="/about" className="navbar-link">ABOUT US</Link>
        <Link to="/contact" className="navbar-link">CONTACT US</Link>
      </div>
      <button className="login-button">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
