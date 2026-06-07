import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    year: '2022 - Present',
    title: 'Ph.D. Researcher in Electrical Engineering',
    institution: 'University of Technology',
    description: 'Specializing in fuzzy logic control for isolated microgrids. Developed novel HIL simulation techniques for synchronous power converters.'
  },
  {
    year: '2019 - 2021',
    title: 'M.Sc. in Power Electronics',
    institution: 'Tech Institute',
    description: 'Graduated with Honors. Thesis: "Design and Control of Hybrid AC/DC Microgrids for Rural Electrification".'
  },
  {
    year: '2015 - 2019',
    title: 'B.Sc. in Electrical & Computer Engineering',
    institution: 'State University',
    description: 'Capstone Project: Hardware implementation of an MPPT tracking algorithm for solar panels.'
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
