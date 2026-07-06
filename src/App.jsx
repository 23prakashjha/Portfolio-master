import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Stars from './components/Stars'
import Hero from './components/Hero'
import About from './About/About'
import Experience from './Experience/Experience'
import Languages from './Languages/Languages'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.style.setProperty('--theme-transition', '0.6s');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(Math.min((winScroll / height) * 100, 100));
      setShowScrollTop(winScroll > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      <Stars/>
      <div className="bg-blobs-container">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
      </div>

      <Navbar theme={theme} setTheme={setTheme}/>
      
      <Hero/>
      <About/>
      <Experience/>
      <Languages/>
      <Projects/>
      <Contact/>
      <Footer/>
      
      <button
        className={`scroll-top ${showScrollTop ? 'show' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  )
}

export default App
