import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </Layout>
  );
}
