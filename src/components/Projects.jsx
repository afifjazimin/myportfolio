import React from 'react';
import './Projects.css';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Employee Management System',
    desc: 'A full-stack HR web application for managing employee records, processing leave requests, and controlling access by role. Built two separate dashboards — one for admins, one for staff — with dynamic tables, a polished AdminLTE UI, and real-time data from MySQL.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'AdminLTE', 'jQuery'],
    year: '2024',
    link: 'https://employeesystem.infinityfreeapp.com',
    image: '/img/diabetes.png'
  },
  {
    title: 'Todo List Web App',
    desc: 'A responsive task management app built entirely in React with Tailwind CSS. Clean component architecture, full CRUD operations, and a UI that feels fast on any device. My go-to demo for showing how I think about state, reusability, and frontend structure.',
    stack: ['React', 'Tailwind CSS', 'Shadcn UI'],
    year: '2024',
    link: 'https://tooduapps.netlify.app',
    image: '/img/ecommerce.png'
  },
  {
    title: 'HTELite',
    desc: 'Development of an extensive e-commerce platform and corporate site for technology solutions, featuring seamless navigation and rich product catalogs.',
    stack: ['WordPress', 'Elementor', 'Tech Solutions'],
    year: '2024',
    link: 'https://htesg.com/',
    image: '/img/ecommerce.png'
  },
  {
    title: 'LAMAR Corporate Website',
    desc: 'A full-featured corporate portfolio built to deliver a fast, responsive, and visually appealing experience for brand engagement and service showcases.',
    stack: ['WordPress', 'Elementor', 'Corporate'],
    year: '2024',
    link: 'http://lamar.com.my/',
    image: '/img/ecommerce.png'
  },
  {
    title: 'Brown Gift & Printing',
    desc: 'A digital catalog platform focused on custom printing and corporate gifts, built to streamline customer browsing and lead generation inquiries.',
    stack: ['WordPress', 'Elementor', 'E-Commerce'],
    year: '2024',
    link: 'https://printstudio.my/',
    image: '/img/ecommerce.png'
  },
  {
    title: 'Getudio App UI/UX',
    desc: 'Comprehensive mobile app designing with a heavy emphasis on intuitive user flows, clear navigation structures, and a clean modern aesthetic using Figma.',
    stack: ['Figma', 'UI/UX Design', 'Prototyping'],
    year: '2023',
    link: 'https://getudio.co/',
    image: '/img/ecommerce.png'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section reveal">
      <div className="section-header">
        <div className="section-title-wrap">
          <p className="section-subtitle">Selected Projects</p>
          <h2 className="section-title">Things I've designed, built & shipped</h2>
        </div>
        <p className="section-description">
          A mix of personal builds and client work, each one a chance to solve a real problem with clean code.
        </p>
      </div>

      <div className="projects-table-container">
        <div className="projects-table-header">
          <div className="th">PROJECTS</div>
          <div className="th">DETAILS</div>
          <div className="th">STACK</div>
          <div className="th text-right">YEAR</div>
        </div>

        <div className="projects-table-body">
          {projects.map((proj, idx) => (
            <div className="project-row reveal" style={{ animationDelay: `${(idx + 1) * 200}ms` }} key={idx}>
              <div className="td proj-col-img">
                <div className="proj-img-wrap">
                  <img src={proj.image} alt={proj.title} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('fallback-img'); }} />
                </div>
              </div>
              <div className="td proj-col-details">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
              </div>
              <div className="td proj-col-stack">
                <div className="project-stack">
                  {proj.stack.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="td proj-col-meta">
                <span className="project-year">{proj.year}</span>
                <a href={proj.link} className="project-link-btn" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
