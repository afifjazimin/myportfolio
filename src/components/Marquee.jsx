import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <div className="marquee-track">
          {/* We duplicate the text multiple times to create a seamless infinite loop */}
          <span className="marquee-item">AVAILABLE FOR WORK <span className="star">✦</span> FRONTEND DEVELOPER <span className="star">✦</span> FULL STACK DEVELOPER <span className="star">✦</span> </span>
          <span className="marquee-item">AVAILABLE FOR WORK <span className="star">✦</span> FRONTEND DEVELOPER <span className="star">✦</span> FULL STACK DEVELOPER <span className="star">✦</span> </span>
          <span className="marquee-item">AVAILABLE FOR WORK <span className="star">✦</span> FRONTEND DEVELOPER <span className="star">✦</span> FULL STACK DEVELOPER <span className="star">✦</span> </span>
          <span className="marquee-item">AVAILABLE FOR WORK <span className="star">✦</span> FRONTEND DEVELOPER <span className="star">✦</span> FULL STACK DEVELOPER <span className="star">✦</span> </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
