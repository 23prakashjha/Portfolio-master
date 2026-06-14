import React from 'react';
import './About.css';
import prak from '../assets/prak.png';

const About = () => {
  const strengths = [
    'Responsive React interfaces',
    'REST API development',
    'MongoDB and MySQL data handling',
    'Deployment on Vercel, Netlify and Render',
  ];

  return (
    <div className="about-container" id="about">
      <div className="about-img reveal reveal-left">
        <img src={prak} alt="Prakash Jha" />
        <div className="about-badges">
          <div className="about-badge reveal" style={{ transitionDelay: '200ms' }}>
            <strong>MCA</strong>
            <span>Gurugram University</span>
          </div>
          <div className="about-badge reveal" style={{ transitionDelay: '300ms' }}>
            <strong>BCA</strong>
            <span>MDU University</span>
          </div>
        </div>
      </div>

      <div className="about-content reveal reveal-right" style={{ transitionDelay: '150ms' }}>
        <span className="section-kicker">About Me</span>
        <h2 className="section-heading">I turn ideas into useful web experiences.</h2>
        <p>
          Hi, I'm <strong>Prakash Jha</strong>, a passionate and motivated
          <strong> MERN Stack Developer</strong> with hands-on experience building
          modern web applications from polished frontend screens to practical backend APIs.
        </p>

        <ul className="about-strengths">
          {strengths.map((item, index) => (
            <li 
              key={item} 
              className="reveal" 
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="about-cards">
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <span>Frontend</span>
            <strong>HTML, CSS, JavaScript, React.js</strong>
          </div>
          <div className="reveal" style={{ transitionDelay: '150ms' }}>
            <span>Backend</span>
            <strong>Node.js, Express.js</strong>
          </div>
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <span>Database</span>
            <strong>MongoDB, MySQL</strong>
          </div>
          <div className="reveal" style={{ transitionDelay: '250ms' }}>
            <span>Tools</span>
            <strong>Git, GitHub, VS Code, Postman</strong>
          </div>
        </div>

        <a
          className="about-btn"
          href="/Prakash Jha.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
