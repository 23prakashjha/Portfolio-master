import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container" id='footer'>
      <div className="footer-content">
        {/* Column 1 */}
        <div className="footer-section about">
          <h3>Prakash Jha</h3>
          <p>
            Passionate Full Stack Developer focused on building responsive and scalable web applications using modern technologies.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#languages">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-section social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://github.com/23prakashjha" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
            <a><i class="fa-brands fa-whatsapp"></i></a>
           <a> <i class="fa-brands fa-linkedin"></i></a>
            <a><i class="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Prakash Jha. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
