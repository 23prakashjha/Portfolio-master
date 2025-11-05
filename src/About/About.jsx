import React from 'react';
import './About.css';
import back from '../assets/back.jpg'; // Make sure this image exists

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-img">
        <img src={back} alt="Prakash Jha" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm <strong>Prakash Jha</strong> — a passionate and motivated <strong>Full Stack Developer</strong> with a strong foundation in web technologies.
          I'm pursuing my <strong>MCA</strong> from Gurugram University and have hands-on experience building modern web applications using:
        </p>

        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB, MySQL</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman</li>
        </ul>

        <p>
          I’ve built several personal projects including a task management app, a blog platform, and my portfolio. I’m now seeking a full-time opportunity or internship to apply my skills and grow professionally.
        </p>

        {/* ✅ Correct Resume Download Button */}
        <a 
          className="about-btn" 
          href="/prakash_resume.pdf"
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
