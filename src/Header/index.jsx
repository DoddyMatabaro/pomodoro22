import React from 'react';
import './header.css';
import  logo  from '../assets/doddy logo.png'


function Header() {
  return (
    <header>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <nav>
            {/* Menu */}
        </nav>
    </header>
    
  )
}

export default Header