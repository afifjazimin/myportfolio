import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section intro-section reveal">
      <div className="intro-grid">
        <div className="intro-col intro-img-col">
          <div className="portrait-wrap">
            <img
              src="/img/thisisme.png"
              alt="Afif Jazimin"
              className="portrait-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('fallback-portrait');
              }}
            />
          </div>
        </div>
        <div className="intro-col intro-text-col">
          <div className="intro-content">
            <h2 className="intro-headline">
              <span className="text-olive">AI engineer with</span><br />
              <span className="text-dark">full-stack delivery.</span>
            </h2>
            <div className="intro-desc">
              <p>
                I'm a web developer with 5+ years of experience across WordPress, React, PHP, and GoHighLevel. I've worked with agencies and startups alike building websites from the ground up, automating lead generation pipelines, and making sure every pixel lines up with real business goals.
              </p>
              <p>
                My edge? I don't just write clean code. I test it, debug it, and validate it. From regression testing CRM integrations to documenting bug reports that cut resolution time by 30%, I bring a QA mindset to every project I touch.
              </p>
              <p>
                Based in Kajang, Selangor. Open to freelance projects, collaborations, and full-time opportunities.
              </p>
            </div>
          </div>
          <div className="expertise-grid">
            <div className="reveal delay-100 expertise-item">
              <h4 className="expertise-heading">Full-Stack Delivery</h4>
              <p className="expertise-desc">
                Building and successfully launching over 20+ websites from the ground up across modern stacks like React, PHP, and WordPress.
              </p>
            </div>
            <div className="reveal delay-200 expertise-item">
              <h4 className="expertise-heading">Pipeline Automation</h4>
              <p className="expertise-desc">
                Automating CRM workflows and managing thousands of lead tracking pipeline events monthly, ensuring every pixel aligns with business goals.
              </p>
            </div>
            <div className="reveal delay-300 expertise-item">
              <h4 className="expertise-heading">QA & Stability</h4>
              <p className="expertise-desc">
                Bringing a rigorous testing mindset to cut bug resolution time by 30% and reduce deployment downtime by over 40%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
