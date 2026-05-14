import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#languages' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <a href="#hero" className="logo" onClick={() => setMenuOpen(false)}>
        <span>PJ</span>
        Prakash Jha
      </a>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="nav-menu">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className="right-menu">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <i className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i>
        </button>
        <a href="#contact" className="nav-connect" onClick={() => setMenuOpen(false)}>
          Hire Me
        </a>
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
