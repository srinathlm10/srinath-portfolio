import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Leadership', href: '#responsibility' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo text-gradient">
          G. Srinath
        </a>
        
        <div className={`nav-links ${menuOpen ? 'open glass-panel' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
