import React from 'react'
import './Hero.css'
import wall from '../assets/wall.png'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  const stats = [
    { value: '25+', label: 'Projects Built' },
    { value: 'MERN', label: 'Primary Stack' },
    { value: '100%', label: 'Responsive Focus' },
  ];

  return (
    <div className='hero' id='hero'>
      <div className="hero-copy">
        <span className="section-kicker">Full Stack Developer Portfolio</span>
        <h1>
          I'm Prakash Jha,{" "}
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
          <a href="#projects" className="hero-connect">View Projects</a>

          <a
            className="hero-resume"
            href="/Prakash Jha.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>

        <div className="hero-stats" aria-label="Portfolio highlights">
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="availability-pill">
          <span></span>
          Available for internship and full-time roles
        </div>
        <img src={wall} alt='Prakash Jha Profile' className='hero-img' />
        <div className="hero-tech-card">
          <p>Current Focus</p>
          <strong>React + Node.js + MongoDB</strong>
        </div>
      </div>
    </div>
  )
}

export default Hero;
