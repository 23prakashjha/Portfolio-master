import React from 'react';
import './About.css';
import wall from '../assets/wall.png';

const About = () => {
  const strengths = [
    'Responsive React interfaces',
    'REST API development',
    'MongoDB and MySQL data handling',
    'Deployment on Vercel, Netlify and Render',
  ];

  return (
    <div className="about-container" id="about">
      <div className="about-img">
        <img src={wall} alt="Prakash Jha" />
        <div className="about-badge">
          <strong>MCA</strong>
          <span>Gurugram University</span>
        </div>
      </div>

      <div className="about-content">
        <span className="section-kicker">About Me</span>
        <h2 className="section-heading">I turn ideas into useful web experiences.</h2>
        <p>
          Hi, I'm <strong>Prakash Jha</strong>, a passionate and motivated
          <strong> Full Stack Developer</strong> with hands-on experience building
          modern web applications from polished frontend screens to practical backend APIs.
        </p>

        <ul className="about-strengths">
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="about-cards">
          <div>
            <span>Frontend</span>
            <strong>HTML, CSS, JavaScript, React.js</strong>
          </div>
          <div>
            <span>Backend</span>
            <strong>Node.js, Express.js</strong>
          </div>
          <div>
            <span>Database</span>
            <strong>MongoDB, MySQL</strong>
          </div>
          <div>
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
