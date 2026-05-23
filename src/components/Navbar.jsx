import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('ABOUT');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal the navbar when parsed beyond the Hero's initial text
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'STACK'];

  return (
    <div className={`floating-nav-wrapper ${!isVisible ? 'hidden' : ''}`}>
      <nav className="floating-nav">
        {navItems.map((item) => (
          <a
            key={item}
            href={item === 'EXPERIENCE' ? '#experience' : `#${item.toLowerCase()}`}
            className={`nav-item ${active === item ? 'nav-active' : ''}`}
            onClick={() => setActive(item)}
          >
            {item}
          </a>
        ))}
        <a href="#contact" className="nav-item nav-action">
          LET'S TALK
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
