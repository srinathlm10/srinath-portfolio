import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',           href: '#home' },
    { name: 'About',          href: '#about' },
    { name: 'Education',      href: '#education' },
    { name: 'Experience',     href: '#experience' },
    { name: 'Research',       href: '#research' },
    { name: 'Projects',       href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements',   href: '#achievements' },
    { name: 'Leadership',     href: '#responsibility' },
    { name: 'Contact',        href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-glass' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="text-gradient font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
          G. Srinath
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link-color relative px-3 py-2 text-sm font-medium rounded-lg
                         hover:bg-blue-500/10 transition-all duration-200
                         focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden mobile-nav overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="mobile-link-color px-4 py-3 text-sm font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
