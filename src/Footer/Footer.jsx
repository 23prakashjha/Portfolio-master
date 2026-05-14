import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container" id="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Prakash Jha</h3>
          <p>
            Full Stack Developer focused on responsive interfaces, scalable APIs and practical digital products.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#languages">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://github.com/23prakashjha" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href="https://wa.me/919220885478" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/prakash-jha-270264401" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:jhaprakash2307@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Prakash Jha. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
