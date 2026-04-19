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
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
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
