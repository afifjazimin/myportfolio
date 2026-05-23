import React, { useRef, useState } from 'react';
import './TiltedCard.css';

const TiltedCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [rotateStart, setRotateStart] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Max rotation in degrees
    const maxRotation = 15;
    
    // Calculate rotation (-max to +max)
    // We reverse y because moving mouse down should tilt top away (negative rotateX)
    const rotateX = -(y / (rect.height / 2)) * maxRotation;
    const rotateY = (x / (rect.width / 2)) * maxRotation;

    setRotateStart({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    // Reset to 0 when mouse leaves
    setRotateStart({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`tilted-card-wrapper ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        className="tilted-card-inner"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateStart.x}deg) rotateY(${rotateStart.y}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltedCard;
