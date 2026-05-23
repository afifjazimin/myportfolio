import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero-section reveal delay-100">
      <div className="hero-content">
        <h1 className="hero-title">I design, build & ship modern web experiences.</h1>
        <p className="hero-subtitle">
          From sleek React web apps to high-converting landing pages and AI-powered automation workflows. I turn complex problems into clean, fast digital products that users love and businesses rely on.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary hero-btn-primary">
            View Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn hero-btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
