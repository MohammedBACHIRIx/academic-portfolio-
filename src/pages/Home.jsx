import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </main>
  );
};

export default Home;
