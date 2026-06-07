import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

              {project.chartData && (
                <section className="detail-section">
                  <h2 className="content-heading">Interactive Data Analysis</h2>
                  <p className="project-paragraph" style={{marginBottom: '1rem', fontWeight: 'bold'}}>{project.chartLabel}</p>
                  <div style={{ width: '100%', height: 350, border: '2px solid var(--border-color)', padding: '1rem' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={project.chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)'}} />
                        <Legend />
                        {project.chartType === 'performance' ? (
                          <>
                            <Line type="monotone" dataKey="PID" stroke="#8996A0" strokeWidth={2} activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="Fuzzy" stroke="#A51C30" strokeWidth={3} />
                          </>
                        ) : project.chartType === 'tracking' ? (
                          <>
                            <Line type="stepAfter" dataKey="Physical" stroke="#8996A0" strokeWidth={2} />
                            <Line type="stepAfter" dataKey="HIL" stroke="#A51C30" strokeDasharray="5 5" strokeWidth={3} />
                          </>
                        ) : null}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </section>
              )}

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
