import React, { useState } from 'react';
import './Experience.css';
import { Users, BarChart2, Network, GraduationCap, BrainCircuit, ChevronDown } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Building smarter web systems with AI & automation',
    company: 'AIMAN CLOUDWORKS',
    year: '2026 - PRESENT',
    desc: `At AiMan Cloudworks, I build high-converting landing pages and intelligent sales funnels using GoHighLevel, then wire them up with CRM integrations.\nWhatsApp automation, and conversion tracking that runs 24/7. I also handle QA, running regression tests to make sure everything keeps working after every update.`,
    tags: ['35% more leads captured', '2,000+ leads tracked monthly', '25% fewer post-update errors', '15% higher funnel conversions'],
    tool: ['GoHighLevel', 'CRM Integration', 'A/B Testing', 'Automation Workflows'],
    icon: <Users size={14} />,
    isActive: false
  },
  {
    id: 2,
    role: 'Crafting responsive websites clients could rely on',
    company: 'Altica Sdn Bhd',
    year: '2021 - 2025',
    desc: 'Over four years at Altica, I developed and maintained 20+ responsive WordPress websites — handling everything from design prototypes to FTP deployments \nand live bug fixes. My focus was always on speed, reliability, and making sure clients got results they could see.',
    tags: ['40% less downtime', '95% sites restored within 24hrs', '20% faster client approvals'],
    tool: ['WordPress', 'UI/UX Prototyping', 'FTP Deployment', 'Figma'],
    icon: <BarChart2 size={14} />,
    isActive: false
  },
  {
    id: 3,
    role: 'Where web & marketing first clicked for me',
    company: 'Bangi Convention Center',
    year: '2020 - 2021',
    desc: 'My first hands-on experience blending web content management with digital marketing and supporting a site with 500+ daily visitors, running competitor \nresearch, and contributing to campaigns that grew social media reach by 15% in just three months.',
    tags: ['15% social engagement growth', '10% higher audience reach'],
    tool: ['Content Management', 'Digital Marketing', 'Competitor Research'],
    icon: <Network size={14} />,
    isActive: false
  },
  {
    id: 4,
    role: 'IT Student',
    company: 'Kolej Sepang',
    year: '2018 - 2020',
    desc: 'Studied the fundamentals of software development from writing my first lines of HTML and PHP to building database-driven web apps with MySQL. \nLearned C++ and Java for programming logic, designed system diagrams, and completed hands-on lab projects that laid the foundation for everything I build today.',
    tags: ['HTML', 'PHP', 'Java', 'C++', 'MySQL', 'Database Design', 'System Diagram', 'Web Development'],
    tool: ['Microsoft Access', 'Adobe Dreamweaver', 'Microsoft Office', 'localhost', 'MySQL'],
    icon: <GraduationCap size={14} />,
    isActive: true
  }
];

const Experience = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="section reveal">
      <div className="section-header">
        <div className="section-title-wrap">
          <p className="section-subtitle">Path / practice log</p>
          <h2 className="section-title">Where I've made an impact.</h2>
        </div>
        <p className="section-description">
          5+ years building products across agencies, startups, and everything in between.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div
            className={`experience-item ${openId === exp.id ? 'open' : ''}`}
            key={exp.id}
            onClick={() => toggleAccordion(exp.id)}
          >
            <div className="exp-timeline-node">
              <div className={`exp-icon-box ${exp.isActive ? 'active' : ''}`}>
                {exp.icon}
              </div>
            </div>

            <div className="exp-content">
              <div className="exp-header">
                <div className="exp-title-group">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-company">@ {exp.company}</span>
                </div>
                <div className="exp-year">{exp.year}</div>
              </div>

              <div className="exp-desc-wrapper">
                <div className="exp-desc-inner">
                  {Array.isArray(exp.desc) ? (
                    <ul className="exp-desc-list">
                      {exp.desc.map((point, i) => (
                        <li key={i} className="exp-desc-point">{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="exp-desc">{exp.desc}</p>
                  )}
                  {exp.tags && (
                    <div className="exp-tags">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="exp-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  {exp.tool && (
                    <div className="exp-tags" style={{ marginTop: '0.5rem' }}>
                      {exp.tool.map((t, i) => (
                        <span key={i} className="exp-tool">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="exp-action">
              <ChevronDown size={18} className="chevron-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
