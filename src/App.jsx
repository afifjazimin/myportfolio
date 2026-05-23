import React, { useEffect } from 'react';
import './index.css';
import './App.css';

import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';

function App() {
  
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.classList.add('visible');
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="container">
        <Hero />
        <div className="scrolling-content">
          <Marquee />
          <About />
          <Experience />
          <Projects />
          <Stack />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
