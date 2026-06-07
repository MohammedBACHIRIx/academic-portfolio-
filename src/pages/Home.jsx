import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import News from '../components/News';
import CVViewer from '../components/CVViewer';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Publications />
      <News />
      <CVViewer />
      <Contact />
    </main>
  );
};

export default Home;
