import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {


  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero-greeting">
            Research Portfolio
          </p>
          <h1 className="hero-name">
            Mohammed Bachiri
          </h1>
          <h2 className="hero-role">
            Microgrid & Power Electronics Researcher
          </h2>
          <p className="hero-description">
            Specializing in energy management systems, hardware-in-the-loop (HIL) simulations, and renewable energy integration. 
            Currently focused on intelligent control strategies for AC and DC microgrids.
          </p>
          
          <div className="hero-actions">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="btn btn-primary">
              View My Work
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#publications" className="btn btn-secondary">
              Publications
            </motion.a>
          </div>

          <div className="hero-socials" style={{display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap'}}>
            <a href="https://www.linkedin.com/in/bachirimohammedx/" className="social-link" target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} /></a>
            <a href="#" className="social-link"><FaGithub size={22} /></a>
            <div style={{width: '2px', height: '24px', backgroundColor: 'var(--border-color)', margin: '0 0.5rem'}}></div>
            <a href="https://scholar.google.com/citations?user=x" className="btn btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}} target="_blank" rel="noopener noreferrer">
              <FaGraduationCap size={16} /> Google Scholar
            </a>
            <a href="https://orcid.org/0000-0000-0000-0000" className="btn btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#A6CE39', borderColor: '#A6CE39'}} target="_blank" rel="noopener noreferrer">
              ORCID
            </a>
          </div>

          <div className="hero-metrics" style={{display: 'flex', gap: '2rem', marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem'}}>
            <div>
              <h4 style={{fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '0', fontFamily: 'var(--font-heading)'}}>5+</h4>
              <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold'}}>Publications</p>
            </div>
            <div>
              <h4 style={{fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '0', fontFamily: 'var(--font-heading)'}}>12+</h4>
              <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold'}}>Citations</p>
            </div>
            <div>
              <h4 style={{fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '0', fontFamily: 'var(--font-heading)'}}>3</h4>
              <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold'}}>H-Index</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/abstract_avatar.png" alt="Mohammed Bachiri Abstract Avatar" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
