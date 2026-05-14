import React, { useState, useEffect } from 'react';
import './Navbar.css';

const themes = [
  { id: 'light', label: 'Light', icon: 'fa-solid fa-sun', color: '#f8fbff', accent: '#0f9f8f' },
  { id: 'dark', label: 'Dark', icon: 'fa-solid fa-moon', color: '#07111f', accent: '#21d0bd' },
  { id: 'ocean', label: 'Ocean', icon: 'fa-solid fa-water', color: '#eef6ff', accent: '#2563eb' },
  { id: 'sunset', label: 'Sunset', icon: 'fa-solid fa-sun', color: '#fffaf0', accent: '#e86a20' },
  { id: 'forest', label: 'Forest', icon: 'fa-solid fa-leaf', color: '#f0fdf4', accent: '#16a34a' },
];

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Internship', href: '#internship' },
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

  useEffect(() => {
    if (!themeOpen) return;
    const close = () => setThemeOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [themeOpen]);

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
        <div className="theme-picker" onClick={(e) => e.stopPropagation()}>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setThemeOpen((prev) => !prev)}
            aria-label="Switch theme"
            title="Switch theme"
          >
            <i className={themes.find((t) => t.id === theme)?.icon || 'fa-solid fa-palette'}></i>
          </button>
          {themeOpen && (
            <div className="theme-popup">
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`theme-option ${theme === t.id ? 'active' : ''}`}
                  type="button"
                  onClick={() => {
                    setTheme(t.id);
                    setThemeOpen(false);
                  }}
                >
                  <span className="theme-swatch" style={{ background: t.color, borderColor: t.accent }}>
                    <i className={t.icon} style={{ color: t.accent }}></i>
                  </span>
                  <span className="theme-label">{t.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
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
