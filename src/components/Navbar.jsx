import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Use effect to toggle body background color
  useEffect(() => {
    if (menuOpen) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';  // Optional: change text color for readability
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <a href="#hero" className="logo">Prakash Jha</a>


      {/* Nav Menu */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="nav-menu">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#footer">Footer</a></li>
      </ul>

      <a href="#contact" className="nav-connect">Connect With Me</a>
    </nav>
  );
};

export default Navbar;
