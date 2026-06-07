import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="project-card"
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <Link to={`/project/${project.id}`} className="btn-icon bg-white" title="View Details"><BookOpen size={20} /></Link>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-icon bg-white" title="Read Publication"><ExternalLink size={20} /></a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <Link to={`/project/${project.id}`} className="project-read-more" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none', marginTop: '1rem' }}>
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
