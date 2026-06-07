import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen } from 'lucide-react';
import './News.css';

const newsData = [
  {
    id: 1,
    type: 'publication',
    icon: <BookOpen size={20} />,
    date: 'March 2026',
    title: 'New Paper Published in Results in Engineering',
    description: 'Our paper on "Sustainable Modernization of Rural Agricultural Power Systems" was accepted and published in Results in Engineering (Elsevier).'
  },
  {
    id: 2,
    type: 'conference',
    icon: <Calendar size={20} />,
    date: 'January 2026',
    title: 'Presented at International Conference',
    description: 'Delivered a presentation on "Low-Cost Hardware-in-the-Loop Simulation" for synchronous boost converters.'
  },
  {
    id: 3,
    type: 'award',
    icon: <Award size={20} />,
    date: 'May 2024',
    title: 'Best Conference Paper Award',
    description: 'Awarded Best Paper for our research on "Fuzzy Logic-Based Energy Management System for an AC Microgrid".'
  }
];

const News = () => {
  return (
    <section id="news" className="section news-section" style={{backgroundColor: 'var(--bg-primary)'}}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Recent News & Activities
        </motion.h2>
        
        <div className="news-grid">
          {newsData.map((item, index) => (
            <motion.div 
              className="news-card glass" 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="news-header">
                <span className={`news-icon ${item.type}`}>
                  {item.icon}
                </span>
                <span className="news-date">{item.date}</span>
              </div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
