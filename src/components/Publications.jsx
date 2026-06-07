import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import './Publications.css';

const publications = [
  {
    id: 1,
    title: 'Experimental evaluation of synchronous buck converter white-box and black-box state-space models',
    journal: 'IOP Conference Series Earth and Environmental Science',
    year: 'March 2026',
    link: 'https://doi.org/10.1088/1755-1315/1598/1/012041',
    description: 'This paper presents the system identification and validation of Synchronous Buck Converter (SBC) models using both white-box and black-box approaches. The study analyzes the trade-off between model accuracy and computational requirements for real-time applications.',
    category: 'HIL Simulation'
  },
  {
    id: 2,
    title: 'Sustainable Modernization of Rural Agricultural Power Systems in North Africa via Optimal Renewable Microgrid Design',
    journal: 'Results in Engineering',
    year: 'March 2026',
    link: 'https://doi.org/10.1016/j.rineng.2026.109238',
    description: 'Developed as part of the MG-FARM project, this paper proposes an integrated methodology for the design, sizing, and experimental validation of a renewable energy-based microgrid tailored for isolated agricultural farms in rural Morocco.',
    category: 'Microgrids'
  },
  {
    id: 3,
    title: 'Development and Evaluation of a Low-Cost Hardware-in-the-Loop Simulation for Synchronous Boost Converter',
    journal: 'Book Chapter',
    year: 'January 2026',
    link: 'https://doi.org/10.1007/978-3-032-07915-2_36',
    description: 'This study presents the design, implementation, and evaluation of a low-cost Hardware-in-the-Loop (HIL) simulation platform developed for studying synchronous boost converters utilizing a TMS320F28069M microcontroller.',
    category: 'HIL Simulation'
  },
  {
    id: 4,
    title: 'Efficient Energy Management in DC Microgrids Using Fuzzy Logic Approach',
    journal: 'Book Chapter',
    year: 'March 2025',
    link: 'https://doi.org/10.1007/978-981-96-0644-3_26',
    description: 'Addressing the challenges of integrating intermittent renewable energy sources into DC microgrids, this research develops an intelligent Energy Management System (EMS) using Fuzzy Logic Control (FLC) to balance power supply and demand.',
    category: 'Control Systems'
  },
  {
    id: 5,
    title: 'Fuzzy Logic-Based Energy Management System for an AC Microgrid',
    journal: 'Conference Paper',
    year: 'May 2024',
    link: 'https://doi.org/10.1007/978-3-031-68675-7_41',
    description: 'This paper proposes an energy management approach using fuzzy logic to optimize power distribution within an AC-coupled microgrid system integrating photovoltaic sources, energy storage, and the distribution grid.',
    category: 'Control Systems'
  }
];

const Publications = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Microgrids', 'Control Systems', 'HIL Simulation'];

  const toggleAbstract = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredPubs = filter === 'All' ? publications : publications.filter(p => p.category === filter);

  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem'}}>
          <h2 className="section-title" style={{marginBottom: 0}}>Selected Publications</h2>
          <div className="filter-controls" style={{display: 'flex', gap: '0.5rem'}}>
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="publications-feed">
          {filteredPubs.map((pub) => (
            <article className="pub-card" key={pub.id}>
              <div className="pub-content">
                <h3 className="pub-title">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                </h3>
                <div className="pub-meta">
                  <span className="pub-journal">{pub.journal}</span>
                  <span className="pub-divider">&bull;</span>
                  <span className="pub-year">{pub.year}</span>
                </div>
                
                {expandedId === pub.id && (
                  <div className="pub-abstract">
                    <h4 className="abstract-heading">Abstract</h4>
                    <p>{pub.description}</p>
                  </div>
                )}
              </div>
              
              <div className="pub-actions">
                <button 
                  className="btn-abstract" 
                  onClick={() => toggleAbstract(pub.id)}
                  aria-expanded={expandedId === pub.id}
                >
                  {expandedId === pub.id ? 'Hide Abstract' : 'Show Abstract'}
                  {expandedId === pub.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <a href={pub.link} className="btn-doi" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> DOI / Link
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
