import React from 'react'
import './Hero.css'
import prak from '../assets/prak.png'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  const stats = [
    { value: '25+', label: 'Projects Built' },
    { value: 'MERN', label: 'Primary Stack' },
    { value: '100%', label: 'Responsive Focus' },
  ];

  return (
    <div className='hero' id='hero'>
      <div className="hero-copy reveal reveal-left">
        <span className="section-kicker">Full Stack Developer Portfolio</span>
        <h1>
          <span className="gradient-text">I'm Prakash Jha</span>,{" "}
          <ReactTyped
            className="typed-text"
            strings={[
              'Full Stack Developer',
              'Frontend Developer',
              'Backend Developer',
              'MERN Developer',
              'Creative Coder',
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h1>

        <p>
          I build responsive, user-friendly web applications with React, Node.js,
          Express.js, MongoDB and clean interface design.
        </p>

        <div className="hero-action">
          <a href="#projects" className="hero-connect"><span><i className="fa-solid fa-arrow-right"></i> View Projects</span></a>

          <a
            className="hero-resume"
            href="/Prakash Jha.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-file-lines"></i> My Resume
          </a>
        </div>

        <div className="hero-stats" aria-label="Portfolio highlights">
          {stats.map((stat, index) => (
            <div 
              className="hero-stat reveal" 
              key={stat.label}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual reveal reveal-right" style={{ transitionDelay: '200ms' }}>
        <div className="availability-pill">
          <span></span>
          Available for full-time roles
        </div>
        <div className="hero-float-icon float-icon-1"><i className="fa-brands fa-react"></i></div>
        <div className="hero-float-icon float-icon-2"><i className="fa-brands fa-node-js"></i></div>
        <div className="hero-float-icon float-icon-3"><i className="fa-solid fa-database"></i></div>
        <img src={prak} alt='Prakash Jha Profile' className='hero-img' />
        <div className="hero-tech-card">
          <p>Current Focus</p>
          <strong>React.js + Node.js + MongoDB + Express.js</strong>
        </div>
      </div>
    </div>
  )
}

export default Hero;
