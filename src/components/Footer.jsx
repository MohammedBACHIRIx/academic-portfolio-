import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-secondary">
      <div className="container footer-container">
        <div className="footer-left">

          <a href="/" className="logo">M. Bachiri</a>
          <p className="footer-text">Building beautiful, accessible digital experiences.</p>
        </div>
        
        <div className="footer-right">
          <div className="footer-socials">
            <a href="#" className="social-link" title="GitHub"><FaGithub size={20} /></a>
            <a href="#" className="social-link" title="LinkedIn"><FaLinkedin size={20} /></a>
            <a href="#" className="social-link" title="Twitter"><FaTwitter size={20} /></a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Mohammed Bachiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
