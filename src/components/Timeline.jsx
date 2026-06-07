import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    year: '2022 - Present',
    title: 'Ph.D. Researcher in Electrical Engineering & Microgrids',
    institution: 'Doctoral Research',
    description: 'Specializing in fuzzy logic control for isolated microgrids and developing novel HIL simulation techniques for synchronous power converters.'
  },
  {
    year: 'Dec 2019 - Dec 2021',
    title: "Master's Degree in Automotive Embedded Systems",
    institution: "Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
    description: "Specialized in Système Embarqué pour l'Automobile. Focus on embedded software and hardware for automotive applications."
  },
  {
    year: '2018 - 2019',
    title: "Bachelor's Degree in Electrical Engineering",
    institution: 'Université Mohammed Premier Oujda',
    description: 'Licence professionnelle en Génie Électrique. Core studies in electrical systems, automation, and industrial electronics.'
  },
  {
    year: '2016 - 2018',
    title: 'University Diploma of Technology (DUT)',
    institution: 'École Supérieure de Technologie - Université Mohammed Premier Oujda',
    description: 'Specialized in Électronique et Informatique Industrielle (Electronics and Industrial IT).'
  }
];

const Timeline = () => {
  return (
    <section className="timeline-section section" style={{backgroundColor: 'var(--bg-secondary)'}}>
      <div className="container">
        <h2 className="section-title">Academic Journey</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-degree">{item.title}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
