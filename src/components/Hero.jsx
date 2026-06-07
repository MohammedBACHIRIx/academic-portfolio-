import React from 'react';
import { BookOpen } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {


  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
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
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#publications" className="btn btn-secondary">
              Publications
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/bachirimohammedx/" className="social-link" target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} /></a>
            <a href="https://www.researchgate.net/profile/Mohammed-Bachiri-2" className="social-link" target="_blank" rel="noopener noreferrer"><BookOpen size={22} /></a>
            <a href="#" className="social-link"><FaGithub size={22} /></a>
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
        </div>
        
        <div className="hero-image-wrapper">
          <img src="/abstract_avatar.png" alt="Mohammed Bachiri Abstract Avatar" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
