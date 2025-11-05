import React from 'react'
import './Hero.css'
import back from '../assets/back.jpg'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <img src={back} alt='Prakash Jha Profile' className='hero-img' />

      <h1>
        I'm Prakash Jha,{" "}
        <ReactTyped
          className="typed-text"
          strings={[
            'Full Stack Developer',
            'Frontend Developer',
            'Backend Developer',
            'Coder',
            'Traveller',
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>

      <p>
        I am a Full Stack Developer skilled in <strong>Frontend Technologies</strong><br />
        such as HTML, CSS, and JavaScript, and <strong>Backend Technologies</strong> like Node.js, Express.js.<br />
        I create interactive web experiences and I'm passionate about blending design aesthetics with functionality.<br />
        Currently pursuing <strong>MCA</strong> from Gurugram University.
      </p>

      <div className="hero-action">
        {/* Change button to anchor tag for proper navigation */}
        <a href="#contact" className="hero-connect">Connect With Me</a>

        {/* Resume download button */}
        <a
          className="hero-resume"
          href="/prakash_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero;
