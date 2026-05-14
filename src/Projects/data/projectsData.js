import Ecommerce from '../../assets/Ecommerce.PNG';
import grocery from '../../assets/grocery.PNG';
import messho from '../../assets/meesho.PNG';
import gym from '../../assets/gym.PNG';
import bollyfilix from '../../assets/bollyfilix.PNG';
import chess from '../../assets/chess.PNG';
import fact2 from '../../assets/fact2.PNG';
import fah2 from '../../assets/fah2.PNG';
import ludo from '../../assets/ludo.PNG';
import olevel from '../../assets/olevel.PNG';
import spotify from '../../assets/spotify.PNG';
import marks from '../../assets/marks.PNG';
import flipkart from '../../assets/flipkart.PNG';
import Bikewala from '../../assets/Bikewala.PNG';
import fooddel from '../../assets/fooddel.PNG';
import Burger from '../../assets/Burger.PNG';
import mern from '../../assets/mern.PNG';
import assignment from '../../assets/assignment.PNG';
import studentapi from '../../assets/studentapi.PNG';
import Chat from '../../assets/Chat.PNG';
import quiz from '../../assets/quiz.PNG';
import theory from '../../assets/theory.PNG';
import vibe from '../../assets/vibe.PNG';
import Emern from '../../assets/Emern.PNG';
import mernfood from '../../assets/mernfood.PNG';

const projectData = [
  {
    title: 'Food Delivery Website',
    image: mernfood,
    description: 'MERN stack food delivery website with MongoDB, Express.js, React, and Node.js for browsing food items and placing orders.',
    live: 'https://food-delivery-website-self-chi.vercel.app/',
    repo: '23prakashjha/food-delivery-website',
  },
  {
    title: 'E-commerce Website',
    image: Emern,
    description: 'Full-stack MERN e-commerce application for browsing products, managing carts, and placing orders with secure APIs.',
    live: 'https://e-commerce-mern-three-alpha.vercel.app/',
    repo: '23prakashjha/E-commerce-Mern',
  },
  {
    title: 'QuizVerse Project',
    image: quiz,
    description: 'Responsive online quiz application with interactive questions, instant feedback, and real-time scoring.',
    live: 'https://quiz-project-blush-two.vercel.app/',
    repo: '23prakashjha/Quiz-Project',
  },
  {
    title: 'Theory-Hub Project',
    image: theory,
    description: 'Responsive educational platform for accessing and exploring learning materials with clear information structure.',
    live: 'https://theory-hub-project.vercel.app/',
    repo: '23prakashjha/theory-hub-project',
  },
  {
    title: 'ChatBot Project',
    image: Chat,
    description: 'AI-powered chatbot web app with natural interaction, instant responses, and real-time messaging flow.',
    live: 'https://chatbot-iota-rosy-39.vercel.app/',
    repo: '23prakashjha/chatbot',
  },
  {
    title: 'VibeCart Project',
    image: vibe,
    description: 'Modern MERN e-commerce web application with smooth online shopping experience and cart management.',
    live: 'https://vibe-cart-seven.vercel.app/',
    repo: '23prakashjha/vibe-cart',
  },
  {
    title: 'Grocery Website',
    image: grocery,
    description: 'React-based grocery website with cart functionality, ordering system, and dynamic content.',
    live: 'https://grocery-app-sand-phi.vercel.app/',
    repo: '23prakashjha/Grocery-App',
  },
  {
    title: 'Clothing Website',
    image: Ecommerce,
    description: 'HTML, CSS and JavaScript e-commerce project with cart functionality and responsive design.',
    live: 'https://e-commerce-sable-one-16.vercel.app/',
    repo: '23prakashjha/E-commerce',
  },
  {
    title: 'Spotify Clone',
    image: spotify,
    description: 'Full-stack MERN Spotify clone with image management, CRUD operations, and music library features.',
    live: 'https://spotify-clone-project-two.vercel.app/',
    repo: '23prakashjha/Spotify-Clone-Project',
  },
  {
    title: 'FlipKart Clone',
    image: flipkart,
    description: 'HTML, CSS and JavaScript FlipKart clone with cart functionality and product listing layouts.',
    live: 'https://flipkart-clone-beta-seven.vercel.app/',
    repo: '23prakashjha/Flipkart-Clone',
  },
  {
    title: 'BikeStore Website',
    image: Bikewala,
    description: 'HTML, CSS and JavaScript bike store website with product showcase and cart management.',
    live: 'https://bike-store-phi.vercel.app/',
    repo: '23prakashjha/Bike-Store',
  },
  {
    title: 'Student API',
    image: studentapi,
    description: 'Full-stack MERN project with complete CRUD operations for student data management.',
    live: 'https://projects-coral-gamma.vercel.app/',
    repo: '23prakashjha/student-api',
  },
  {
    title: 'Assignment Project',
    image: assignment,
    description: 'HTML, CSS and JavaScript project with structured layouts and interactive features.',
    live: 'https://assignment-seven-bice.vercel.app/',
    repo: '23prakashjha',
  },
  {
    title: 'Assignment-2 Project',
    image: mern,
    description: 'Full-stack project with CRUD operations and database integration.',
    live: 'https://new-folder-2-amber-xi.vercel.app/',
    repo: '23prakashjha',
  },
  {
    title: 'Food Website',
    image: Burger,
    description: 'React-based e-commerce food website with cart functionality and interactive UI.',
    live: 'https://stupendous-snickerdoodle-76bff4.netlify.app/',
    repo: '23prakashjha/Website',
  },
  {
    title: 'Food Delivery Website',
    image: fooddel,
    description: 'React-based food delivery platform with ordering system and responsive design.',
    live: 'https://enchanting-sprinkles-5fc281.netlify.app/',
    repo: '23prakashjha/food-website',
  },
  {
    title: 'Meesho Clone',
    image: messho,
    description: 'Meesho clone built with HTML, CSS, and Bootstrap with responsive product layouts.',
    live: 'https://startling-lily-a98a6f.netlify.app/',
    repo: '23prakashjha/meesho-clone',
  },
  {
    title: 'Gym Website',
    image: gym,
    description: 'Gym project using HTML, CSS, Bootstrap for layout, styling, and fitness content.',
    live: 'https://gym-project-puce.vercel.app/',
    repo: '23prakashjha/Gym-Project',
  },
  {
    title: 'Bollyfilix Clone',
    image: bollyfilix,
    description: 'Clone of Bollyfilix streaming platform using HTML and CSS with media layouts.',
    live: 'https://adorable-gaufre-af74c1.netlify.app/',
    repo: '23prakashjha/Bollyfilix-clone',
  },
  {
    title: 'Chess',
    image: chess,
    description: 'Interactive chess game built with HTML, CSS, and JavaScript logic.',
    live: '/javascript/Chess Board.html',
    repo: '23prakashjha/html--css--javascript',
  },
  {
    title: 'Ludo',
    image: ludo,
    description: 'Multiplayer Ludo game created with JavaScript and dynamic board rendering.',
    live: '/javascript/ludo.html',
    repo: '23prakashjha/html--css--javascript',
  },
  {
    title: 'O-levels Forms',
    image: olevel,
    description: 'Form layouts using HTML/CSS with structured input fields and validation.',
    live: '/javascript/O-level.html',
    repo: '23prakashjha/html--css--javascript',
  },
  {
    title: 'Marks Calculator',
    image: marks,
    description: 'Student marks calculation tool using JavaScript with dynamic score processing.',
    live: '/javascript/Marks Sheet Calculator.html',
    repo: '23prakashjha/html--css--javascript',
  },
  {
    title: 'Converter Calculator',
    image: fah2,
    description: 'Multi-unit converter with JavaScript for real-time value conversion.',
    live: '/javascript/Convetor.html',
    repo: '23prakashjha/html--css--javascript',
  },
  {
    title: 'Factorial Calculator',
    image: fact2,
    description: 'Factorial calculator tool built with JavaScript for mathematical computations.',
    live: '/javascript/factorial.html',
    repo: '23prakashjha/html--css--javascript',
  },
];

export default projectData;
