import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;