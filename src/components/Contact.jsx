import React from 'react';
import './Contact.css';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section reveal">
      <div className="contact-grid">

        <div className="contact-left">
          <h2 className="contact-headline">
            Let's Build <br />
            <span className="text-olive">Something Beautiful.</span>
          </h2>
          <p className="contact-desc">
            Feel free to reach out for collaborations, system architecture discussions, or just to say hello. Always open to exploring new opportunities.
          </p>
          <a href="/Afif_Jazimin_Web_Dev.pdf" className="btn-download" target="_blank" rel="noopener noreferrer">
            DOWNLOAD CV <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="contact-right">
          <div className="links-group">
            <h4 className="group-title">SITEMAP</h4>
            <div className="links-list">
              <a href="#about" className="link-item">About</a>
              <a href="#projects" className="link-item">Projects</a>
              <a href="#experience" className="link-item">Experience</a>
              <a href="#stack" className="link-item">Capabilities</a>
            </div>
          </div>

          <div className="links-group">
            <h4 className="group-title">SOCIALS</h4>
            <div className="links-list">
              <a href="mailto:muhdafif.aj@gmail.com" className="link-item">
                <div className="link-content">
                  <Mail size={16} /> Email
                </div>
                <ArrowUpRight size={14} className="link-icon-right" />
              </a>
              <a href="#" className="link-item" target="_blank" rel="noopener noreferrer">
                <div className="link-content">
                  <FaGithub size={16} /> GitHub
                </div>
                <ArrowUpRight size={14} className="link-icon-right" />
              </a>
              <a href="https://linkedin.com/in/afifjazimin2000" className="link-item" target="_blank" rel="noopener noreferrer">
                <div className="link-content">
                  <FaLinkedin size={16} /> LinkedIn
                </div>
                <ArrowUpRight size={14} className="link-icon-right" />
              </a>
              <a href="#" className="link-item" target="_blank" rel="noopener noreferrer">
                <div className="link-content">
                  <FaDiscord size={16} /> Discord
                </div>
                <ArrowUpRight size={14} className="link-icon-right" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
