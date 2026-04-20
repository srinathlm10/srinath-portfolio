import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Responsibility from './components/Responsibility';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import './index.css';

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <ThemeSwitcher mode={mode} setMode={setMode} />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Research />
        <Projects />
        <Certifications />
        <Achievements />
        <Responsibility />
        <Contact />
      </main>
    </div>
  );
}

export default App;
