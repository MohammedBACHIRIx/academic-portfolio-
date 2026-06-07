import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Lightbulb } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p>
              Hello! I'm Mohammed Bachiri, a researcher affiliated with Mohamed I University (UMP) in Oujda, Morocco. 
              My academic and professional journey is driven by a deep interest in sustainable energy solutions, 
              specifically focusing on the modeling, simulation, and control of complex electrical systems.
            </p>
            <p>
              My recent research centers around energy management systems utilizing fuzzy logic, low-cost Hardware-in-the-Loop (HIL) 
              implementations for converters, and rural renewable energy designs such as the MG-FARM project. 
              I strive to bridge the gap between theoretical modeling and practical, robust energy applications.
            </p>
          </motion.div>

          <div className="about-cards">
            <motion.div 
              className="about-card glass hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              <div className="card-icon"><Layout size={28} /></div>
              <h3>Microgrids & EMS</h3>
              <p>Designing intelligent Energy Management Systems for isolated and grid-connected AC/DC microgrids.</p>
            </motion.div>

            <motion.div 
              className="about-card glass hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-icon"><Code size={28} /></div>
              <h3>Simulation & Modeling</h3>
              <p>Performing system identification and white-box/black-box modeling of synchronous power converters.</p>
            </motion.div>

            <motion.div 
              className="about-card glass hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
            >
              <div className="card-icon"><Lightbulb size={28} /></div>
              <h3>Hardware-in-the-Loop</h3>
              <p>Developing low-cost HIL implementations for real-time validation of energy control strategies.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
