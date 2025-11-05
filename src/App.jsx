import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './About/About'
import Languages from './Languages/Languages'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Languages/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
