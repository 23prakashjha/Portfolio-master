import React, { useState } from 'react';
import './Projects.css';
import Ecommerce from '../assets/Ecommerce.PNG';
import Grocery from '../assets/Grocery.PNG';
import messho from '../assets/meesho.PNG';
import gym from '../assets/gym.PNG';
import bollyfilix from '../assets/bollyfilix.PNG';
import chess from '../assets/chess.PNG';
import fact2 from '../assets/fact2.PNG';
import fah2 from '../assets/fah2.PNG';
import ludo from '../assets/ludo.PNG';
import olevel from '../assets/olevel.PNG';
import spotify from '../assets/spotify.PNG';
import marks from '../assets/marks.PNG';


const projectData = [
  {
    title: 'Grocery Website',
    image: Grocery,
    description: 'This is a React Project Grocery website with cart, ordering, and content features.',
    live: 'https://grocery-app-sand-phi.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/Grocery-App.git',
  },
  {
    title: 'FlipKart Clone Website',
    image: Ecommerce,
    description: 'This is html, css and javascript project with cart functionality and more.',
    live: 'https://flipkart-clone-beta-seven.vercel.app/',
    code: 'https://github.com/23prakashjha/E-commerce.git',
  },
   {
    title: 'BikeStore Website',
    image: Ecommerce,
    description: 'This is html, css and javascript project with cart functionality and more.',
    live: 'https://bike-store-phi.vercel.app/',
    code: 'https://github.com/23prakashjha/E-commerce.git',
  },
   {
    title: 'E-Commerce Website',
    image: Ecommerce,
    description: 'React-based e-commerce project with cart functionality and more.',
    live: 'https://projects-coral-gamma.vercel.app/',
    code: 'https://github.com/23prakashjha/E-commerce.git',
  },
   {
    title: 'E-Commerce Website',
    image: Ecommerce,
    description: 'React-based e-commerce project with cart functionality and more.',
    live: 'https://assignment-seven-bice.vercel.app/',
    code: 'https://github.com/23prakashjha/E-commerce.git',
  },
   {
    title: 'E-Commerce Website',
    image: Ecommerce,
    description: 'React-based e-commerce project with cart functionality and more.',
    live: 'https://new-folder-2-amber-xi.vercel.app/',
    code: 'https://github.com/23prakashjha/E-commerce.git',
  },
   {
    title: 'E-Commerce Website',
    image: Ecommerce,
    description: 'React-based e-commerce project with cart functionality and more.',
    live: 'https://stupendous-snickerdoodle-76bff4.netlify.app/',
    code: 'https://github.com/23prakashjha/E-commerce.git',
  },
   {
    title: 'E-Commerce Website',
    image: Ecommerce,
    description: 'React-based e-commerce project with cart functionality and more.',
    live: 'https://enchanting-sprinkles-5fc281.netlify.app/',
    code: 'https://github.com/23prakashjha/E-commerce.git',
  },
  {
    title: 'Meesho Clone Website',
    image: messho,
    description: 'A Meesho clone using HTML, CSS, and Bootstrap.',
    live: 'https://startling-lily-a98a6f.netlify.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/meesho-clone.git',
  },
  {
    title: 'Gym Website',
    image: gym,
    description: 'Gym project using HTML, CSS, Bootstrap for layout and styling.',
    live: 'https://gym-project-puce.vercel.app/',
    code: 'https://github.com/23prakashjha/Gym-Project.git',
  },
  {
    title: 'Bollyfilix Clone Website',
    image: bollyfilix,
    description: 'Clone of Bollyfilix using HTML and CSS.',
    live: 'https://adorable-gaufre-af74c1.netlify.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/Bollyfilix-clone.git',
  },
  {
    title: 'Spotify Clone Website',
    image: spotify,
    description: 'Spotify clone made with HTML, CSS and JavaScript.',
    live: 'https://spotify-clone-project-two.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/meesho-clone.git',
  },
  {
    title: 'Chess',
    image: chess,
    description: 'Chess game built using HTML, CSS, and JavaScript.',
    live: '/javascript/Chess Board.html',
    code: 'https://github.com/23prakashjha/html--css--javascript.git',
  },
  {
    title: 'Ludo',
    image: ludo,
    description: 'A simple Ludo game created using JavaScript.',
    live: '/javascript/ludo.html',
    code: 'https://github.com/23prakashjha/html--css--javascript.git',
  },
  {
    title: 'O-levels Forms',
    image: olevel,
    description: 'Form layouts using basic HTML/CSS structure.',
    live: '/javascript/O-level.html',
    code: 'https://github.com/23prakashjha/html--css--javascript.git',
  },
  {
    title: 'Marks Sheet Calculator',
    image: marks,
    description: 'Calculate student marks using simple JS logic.',
    live: '/javascript/Marks Sheet Calculator.html',
    code: 'https://github.com/23prakashjha/html--css--javascript.git',
  },
  {
    title: 'Converter Calculator',
    image: fah2,
    description: 'Unit converter using JavaScript.',
    live: '/javascript/Convetor.html',
    code: 'https://github.com/23prakashjha/html--css--javascript.git',
  },
  {
    title: 'Factorial Calculator',
    image: fact2,
    description: 'A factorial calculator built using JavaScript.',
    live: '/javascript/factorial.html',
    code: 'https://github.com/23prakashjha/html--css--javascript.git',
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectData : projectData.slice(0, 6);

  const toggleShowMore = () => setShowAll(!showAll);

  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a
                  href={project.live || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={project.live ? '' : 'disabled-link'}
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      <div className="view-more-container">
        <button className="view-more-button" onClick={toggleShowMore}>
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default Projects;
