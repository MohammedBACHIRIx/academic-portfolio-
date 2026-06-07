import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience & Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Publications', href: '/#publications' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="logo">M. Bachiri</a>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
            <li>
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="btn-icon theme-toggle" style={{color: 'var(--text-primary)', marginLeft: '1rem'}}>
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
          <a href="/#contact" className="btn btn-primary nav-cta" style={{marginLeft: '1.5rem'}}>Let's Talk</a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="/#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
