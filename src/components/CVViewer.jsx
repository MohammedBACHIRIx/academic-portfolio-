import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import './CVViewer.css';

const CVViewer = () => {
  return (
    <section id="cv" className="section cv-section">
      <div className="container">
        <motion.div 
          className="cv-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title" style={{marginBottom: 0}}>Curriculum Vitae</h2>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-cv">
            <Download size={18} /> Download Full CV
          </a>
        </motion.div>

        <motion.div 
          className="cv-viewer-container glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="cv-browser-bar">
            <div className="browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="browser-title"><FileText size={14} /> mohammed-bachiri-cv.pdf</div>
          </div>
          
          {/* Mock embedded CV or real object/iframe */}
          <div className="cv-content">
             {/* Note: This is an aesthetic mockup of a CV viewer since we don't have a real PDF. 
                 If a real PDF exists, we'd use <object data="/cv.pdf" type="application/pdf" width="100%" height="600px"> */}
             <div className="cv-mockup-page">
                <header className="cv-mockup-header">
                  <h1>Mohammed Bachiri</h1>
                  <p>Ph.D. Researcher • Electrical Engineering • Microgrids</p>
                  <p>bachiri.mohammed@example.edu • Boston, MA</p>
                </header>
                
                <div className="cv-mockup-section">
                  <h3>Education</h3>
                  <div className="cv-mockup-item">
                    <div className="cv-mockup-row">
                      <strong>Ph.D. in Electrical Engineering</strong>
                      <span>2022 - Present</span>
                    </div>
                    <p>Doctoral Research</p>
                  </div>
                  <div className="cv-mockup-item">
                    <div className="cv-mockup-row">
                      <strong>M.Sc. Automotive Embedded Systems</strong>
                      <span>2019 - 2021</span>
                    </div>
                    <p>ENSIAS</p>
                  </div>
                </div>

                <div className="cv-mockup-section">
                  <h3>Selected Publications</h3>
                  <ul className="cv-mockup-list">
                    <li>Experimental evaluation of synchronous buck converter... (2026)</li>
                    <li>Sustainable Modernization of Rural Agricultural Power Systems... (2026)</li>
                    <li>Development and Evaluation of a Low-Cost Hardware-in-the-Loop Simulation... (2026)</li>
                  </ul>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVViewer;
