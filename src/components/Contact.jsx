import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info">
            <p className="contact-desc">
              I am open to academic collaborations, consulting opportunities, and discussions on renewable energy integration.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email</h4>
                  <p>bachiri.mohammed@example.edu</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><Phone size={24} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Boston, MA</p>
                </div>
              </div>
            </div>
          </div>

          <form 
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
