import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Academic & Professional Background</h2>
        
        <div className="cv-grid">
          {/* Timeline / Experience */}
          <div className="cv-timeline">
            <h3 className="cv-section-heading">Experience & Education</h3>
            
            <div className="timeline-item">
              <div className="timeline-date">2022 - Present</div>
              <div className="timeline-content">
                <h4 className="timeline-title">Ph.D. Researcher in Electrical Engineering</h4>
                <div className="timeline-institution">University Name / Research Lab</div>
                <p className="timeline-desc">
                  Leading research in Energy Management Systems (EMS) for hybrid AC/DC microgrids. 
                  Developing Fuzzy Logic Control strategies and real-time Hardware-in-the-Loop (HIL) simulations.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2020 - 2022</div>
              <div className="timeline-content">
                <h4 className="timeline-title">Master's / Engineering Degree</h4>
                <div className="timeline-institution">Institution Name</div>
                <p className="timeline-desc">
                  Specialized in power electronics, control systems, and renewable energy integration.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Matrix */}
          <div className="cv-skills">
            <h3 className="cv-section-heading">Technical Capabilities</h3>
            
            <div className="skill-category">
              <h4 className="category-title">Simulation & Modeling</h4>
              <div className="skill-list">
                <span className="skill-tag">MATLAB/Simulink</span>
                <span className="skill-tag">Homer Pro</span>
                <span className="skill-tag">System Identification</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">Hardware & Control</h4>
              <div className="skill-list">
                <span className="skill-tag">Hardware-in-the-Loop (HIL)</span>
                <span className="skill-tag">TMS320F28069M MCU</span>
                <span className="skill-tag">Fuzzy Logic Control</span>
                <span className="skill-tag">Power Converters (Buck/Boost)</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="category-title">Programming & Tools</h4>
              <div className="skill-list">
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">LaTeX</span>
                <span className="skill-tag">Data Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
