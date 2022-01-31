import React from 'react';
import Navbar from './PortfolioContainer/NavBar/Navbar.js'
import Hero from './PortfolioContainer/Hero/Hero.js';
import About from './PortfolioContainer/AboutMe/About.js';
import Skills from './PortfolioContainer/Skills/Skills.js';
import ProyectList from './PortfolioContainer/ProyectList/ProyectList.js';
import Contact from './PortfolioContainer/ConctactMe/Contact.js';


function App() {
  return (
    <div className="App" >
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <ProyectList/>
      <Contact/>
    </>
    </div>
  );
}

export default App;
