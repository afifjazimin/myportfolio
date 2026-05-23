import React from 'react';
import './Stack.css';
import {
  LayoutTemplate, Server, ShieldCheck, Workflow, Wrench,
  AppWindow, Palette, Code2, Blocks, Layers,
  Terminal, Database, Network, CheckSquare, Activity,
  FileText, Bug, GitCompare, Zap, Globe, MessageSquare,
  Users, GitBranch, GitPullRequest, Eye, Box, Cloud, Folder, Grid
} from 'lucide-react';

const stackData = [
  {
    num: "01",
    category: "Frontend",
    topIcon: <LayoutTemplate size={22} strokeWidth={1.5} />,
    desc: "Responsive, high-performance interfaces with a strong focus on clean semantics, interactive details, and polished user journeys.",
    items: [
      { name: "HTML5", icon: <AppWindow size={14} /> },
      { name: "CSS3", icon: <Palette size={14} /> },
      { name: "JavaScript (ES6)", icon: <Code2 size={14} /> },
      { name: "React.js", icon: <Blocks size={14} /> },
      { name: "Bootstrap", icon: <Layers size={14} /> },
      { name: "Tailwind CSS", icon: <LayoutTemplate size={14} /> }
    ]
  },
  {
    num: "02",
    category: "Backend",
    topIcon: <Server size={22} strokeWidth={1.5} />,
    desc: "Robust server-side logic, custom database structures, and seamless content management integrations that power dynamic web architectures.",
    items: [
      { name: "PHP", icon: <Terminal size={14} /> },
      { name: "MySQL", icon: <Database size={14} /> },
      { name: "WordPress (Theme Customization)", icon: <LayoutTemplate size={14} /> },
      { name: "WordPress (Plugin Integration)", icon: <Blocks size={14} /> },
      { name: "MVC Architecture", icon: <Network size={14} /> }
    ]
  },
  {
    num: "03",
    category: "Testing & QA",
    topIcon: <ShieldCheck size={22} strokeWidth={1.5} />,
    desc: "Comprehensive quality assurance strategies, manual testing procedures, and structured test plans to deliver completely bug-free deployments.",
    items: [
      { name: "Manual Testing", icon: <CheckSquare size={14} /> },
      { name: "Regression Testing", icon: <Activity size={14} /> },
      { name: "Test Case Design", icon: <FileText size={14} /> },
      { name: "Bug Reporting", icon: <Bug size={14} /> },
      { name: "A/B Testing", icon: <GitCompare size={14} /> }
    ]
  },
  {
    num: "04",
    category: "Automation & CRM",
    topIcon: <Workflow size={22} strokeWidth={1.5} />,
    desc: "Intelligent automation architectures, specialized sales funnels, and optimized CRM integrations designed to scale lead generation and workflows.",
    items: [
      { name: "GoHighLevel (Sales Funnels)", icon: <Zap size={14} /> },
      { name: "Landing Pages", icon: <Globe size={14} /> },
      { name: "WhatsApp Automation", icon: <MessageSquare size={14} /> },
      { name: "Lead Management", icon: <Users size={14} /> }
    ]
  },
  {
    num: "05",
    category: "Tools",
    topIcon: <Wrench size={22} strokeWidth={1.5} />,
    desc: "Industry-standard configuration panels, version control, creative design suites, and development utilities that optimize daily workflows.",
    items: [
      { name: "Figma", icon: <Palette size={14} /> },
      { name: "Adobe XD", icon: <Palette size={14} /> },
      { name: "Adobe Photoshop", icon: <Palette size={14} /> },
      { name: "VS Code", icon: <Code2 size={14} /> },
      { name: "Git", icon: <GitBranch size={14} /> },
      { name: "GitHub", icon: <GitPullRequest size={14} /> },
      { name: "Chrome DevTools", icon: <Eye size={14} /> },
      { name: "Postman", icon: <Terminal size={14} /> },
      { name: "npm", icon: <Box size={14} /> },
      { name: "Composer", icon: <Box size={14} /> },
      { name: "Netlify", icon: <Cloud size={14} /> },
      { name: "cPanel", icon: <Server size={14} /> },
      { name: "FileZilla", icon: <Folder size={14} /> },
      { name: "Trello", icon: <Grid size={14} /> }
    ]
  }
];

const Stack = () => {
  return (
    <section id="stack" className="section reveal">
      <div className="section-header">
        <div className="section-title-wrap">
          <p className="section-subtitle">Technical Stack</p>
          <h2 className="section-title">Tools I build with</h2>
        </div>
        <p className="section-description">
          Carefully chosen. Constantly refined. Here's what powers my work.
        </p>
      </div>
      <div className="stack-grid">
        {stackData.map((stack, idx) => (
          <div 
            className={`stack-module reveal ${idx === stackData.length - 1 ? 'span-2' : ''}`} 
            style={{ animationDelay: `${(idx + 1) * 150}ms` }} 
            key={idx}
          >
            <div className="stack-module-header">
              <div className="stack-title-group">
                <span className="stack-num">MODULE {stack.num}</span>
                <h3 className="stack-category">{stack.category}</h3>
              </div>
              <div className="stack-top-icon">
                {stack.topIcon}
              </div>
            </div>

            <div className="stack-divider"></div>

            <p className="stack-desc">{stack.desc}</p>

            <div className="stack-badges">
              {stack.items.map(item => (
                <span className="stack-badge" key={item.name}>
                  {item.icon} {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
