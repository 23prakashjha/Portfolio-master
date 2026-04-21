import React, { useState } from 'react';
import './Projects.css';
import Ecommerce from '../assets/Ecommerce.PNG';
import grocery from '../assets/grocery.PNG';
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
import flipkart from '../assets/flipkart.PNG';
import Bikewala from '../assets/Bikewala.PNG';
import fooddel from '../assets/fooddel.PNG';
import Burger from '../assets/Burger.PNG';
import ielts from '../assets/ielts.PNG';
import mern from '../assets/mern.PNG';
import assignment from '../assets/assignment.PNG';
import studentapi from '../assets/studentapi.PNG';
import Chat from '../assets/Chat.PNG';
import quiz from '../assets/quiz.PNG';
import theory from '../assets/theory.PNG';
import vibe from '../assets/vibe.PNG';
import Emern from '../assets/Emern.PNG';
import mernfood from '../assets/mernfood.PNG';


const projectData = [
  {
    title: 'Food Delivery Website ',
    image: mernfood,
    description: 'This project is a MERN stack food delivery website built using MongoDB, Express.js, React, and Node.js. It provides a responsive and user-friendly platform for browsing food items and placing orders, focusing on efficient data handling, smooth UI, and scalable backend architecture.',
    live: 'https://food-delivery-website-self-chi.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/food-delivery-website.git',
  },
  {
    title: 'E-commerce Website',
    image: Emern,
    description: 'This project is a full-stack MERN e-commerce application developed using MongoDB, Express.js, React, and Node.js. It enables users to browse products, manage carts, and place orders through a secure and responsive interface, focusing on scalable backend APIs, dynamic product management, and smooth user experience.',
    live: 'https://e-commerce-mern-three-alpha.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/E-commerce-Mern.git',
  },
  
  {
    title: 'QuizVerse Project',
    image: quiz,
    description: 'This is a responsive online quiz application designed to test users’ knowledge through interactive questions and instant feedback. The focus is on a simple user interface, engaging question flow, and real-time scoring to deliver an intuitive and fun learning experience.',
    live: 'https://quiz-project-blush-two.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/Quiz-Project.git',
  },
  {
    title: 'Theory-Hub Project ',
    image: theory,
    description: 'This is a responsive educational platform designed to help users access and explore learning materials easily. Built with a focus on clear information structure, simple navigation, and reader-friendly layouts, the site enhances learning by making content accessible and engaging.',
    live: 'https://theory-hub-project.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/theory-hub-project.git',
  },
  {
    title: 'ChatBot Project',
    image: Chat,
    description: 'This project is a responsive AI-powered chatbot web app that enables users to interact naturally and get instant responses. Designed with a clean interface and real-time messaging flow, it focuses on easy communication, engaging user experience, and interactive conversational design.',
    live: 'https://chatbot-iota-rosy-39.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/chatbot.git',
  },
  {
    title: 'VibeCart Project',
    image: vibe,
    description: 'VibeCart is Mern project with  a modern e-commerce is  web application designed to provide users with a smooth and engaging online shopping experience..',
    live: 'https://vibe-cart-seven.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/vibe-cart.git',
  },
  {
    title: 'Grocery Website',
    image: grocery,
    description: 'This is a React Project Grocery website with cart, ordering, and content features.',
    live: 'https://grocery-app-sand-phi.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/Grocery-App.git',
  },
  {
    title: 'Clothing Website',
    image: Ecommerce,
    description: 'This is html, css and javascript project with cart functionality and more.',
    live: 'https://e-commerce-sable-one-16.vercel.app/',
    code: 'https://github.com/23prakashjha/E-commerce.git',
  },
  {
    title: 'Spotify Clone Website',
    image: spotify,
    description: 'This is Full-Stack Mern Project with have add images and crud operations and many fatures.',
    live: 'https://spotify-clone-project-two.vercel.app/', // Replace with actual live link
    code: 'https://github.com/23prakashjha/Spotify-Clone-Project.git',
  },
  {
    title: 'FlipKart Clone Website',
    image: flipkart,
    description: 'This is html, css and javascript project with cart functionality and more.',
    live: 'https://flipkart-clone-beta-seven.vercel.app/',
    code: 'https://github.com/23prakashjha/Flipkart-Clone.git',
  },
   {
    title: 'BikeStore Website',
    image: Bikewala,
    description: 'This is html, css and javascript project with cart functionality and more.',
    live: 'https://bike-store-phi.vercel.app/',
    code: 'https://github.com/23prakashjha/Bike-Store.git',
  },
   {
    title: 'Student API',
    image:studentapi,
    description: 'This is the full Stack Mern Project with have add CRUD Operations can be perform them.',
    live: 'https://projects-coral-gamma.vercel.app/',
    code: 'https://github.com/23prakashjha/student-api.git',
  },
   {
    title: 'Assignment Project',
    image:assignment,
    description: 'This is html, css and javascript project with cart functionality and more.',
    live: 'https://assignment-seven-bice.vercel.app/',
    code: 'https://github.com/23prakashjha',
  },
   {
    title: 'Assignment-2 Project',
    image: mern,
    description: 'This is basically Full Stack Project with CRUD Operaetions can be performed them.',
    live: 'https://new-folder-2-amber-xi.vercel.app/',
    code: 'https://github.com/23prakashjha',
  },
   {
    title: 'Food Website',
    image:Burger,
    description: 'React-based e-commerce project with cart functionality and more.',
    live: 'https://stupendous-snickerdoodle-76bff4.netlify.app/',
    code: 'https://github.com/23prakashjha/Website.git',
  },
   {
    title: 'Food Delivery Website',
    image:fooddel,
    description: 'React-based e-commerce project with cart functionality and more.',
    live: 'https://enchanting-sprinkles-5fc281.netlify.app/',
    code: 'https://github.com/23prakashjha/food-website.git',
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
  const visibleProjects = showAll ? projectData : projectData.slice(0, 8);

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
