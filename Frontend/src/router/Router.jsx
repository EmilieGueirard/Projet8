import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/sections/Header/Header';
import Presentation from '../components/sections/Presentation/Presentation';
import SkillsCollection from '../components/sections/SkillsCollection/SkillsCollection';
import Projects from '../components/sections/Projects/Projects';import Skills from '../components/sections/Skills/Skills';
import Contact from '../components/sections/Contact/Contact';
import Footer from '../components/sections/Footer/Footer';

function App() {
    return (
      <Router>
        <Header />
        <Presentation />
        <SkillsCollection />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Router>
    );
  }
  
  export default App;