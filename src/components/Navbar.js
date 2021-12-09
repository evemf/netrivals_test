import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Logo from '../images/logo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
    setDropdown(true);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon'>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul 
          className={click ? 'nav-menu active' : 'nav-menu'}
        >
          <li 
            className='nav-item'
          >
            <Link to='/' className='nav-links navbar-logo'>
            <img src={Logo} alt="NetRivals logo" />
            </Link>
          </li>
          <li 
              className={click ? 'nav-item nav-item-dropdown active' : 'nav-item nav-item-dropdown'} 
              onClick={toggleMenu}
           >
            <p className='nav-links'>
              Products
            </p>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/settings'
              className='nav-links'
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
