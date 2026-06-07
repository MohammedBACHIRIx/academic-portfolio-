import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="project-details-page">
        <div className="container">
          <h2>Project Not Found</h2>
          <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-details-page">
      <div className="container">
        <Link to="/#projects" className="back-link"><ArrowLeft size={20} /> Back to Projects</Link>
        
        <article className="project-article">
          <header className="project-header">
            <h1 className="project-title-large">{project.title}</h1>
            <div className="project-tech-large">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag-large">{tech}</span>
              ))}
            </div>
          </header>

          <div className="project-banner">
            <div className="visual-evidence-label">Visual Evidence & Data</div>
            <img src={project.image} alt={project.title} className="project-hero-image" />
          </div>

          <div className="project-content">
            <div className="project-text">
              <section className="detail-section">
                <h2 className="content-heading">The Problem</h2>
                <p className="project-paragraph">{project.details.problem}</p>
              </section>

              <section className="detail-section">
                <h2 className="content-heading">My Approach</h2>
                <p className="project-paragraph">{project.details.approach}</p>
              </section>

              <section className="detail-section">
                <h2 className="content-heading">Key Findings</h2>
                <p className="project-paragraph">{project.details.findings}</p>
              </section>

              <section className="detail-section">
                <h2 className="content-heading">Impact & Significance</h2>
                <p className="project-paragraph">{project.details.impact}</p>
              </section>
            </div>
            
            <aside className="project-sidebar">
              <div className="sidebar-box">
                <h3>My Role</h3>
                <p className="role-text">{project.details.role}</p>
              </div>

              <div className="sidebar-box mt-4">
                <h3>Resources</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                  <ExternalLink size={18} style={{ marginRight: '8px' }} /> View Publication
                </a>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ProjectDetails;
