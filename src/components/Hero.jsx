import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const roles = ['Data Analyst', 'Finance Enthusiast', 'Management Professional', 'Urban Planner'];
  const typedText = useTypewriter(roles, 100, 50, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Ambient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #0ea5e9, transparent 70%)', animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
        {/* Content */}
        <div className="fade-in text-center lg:text-left">
          <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-4">
            Hi, my name is
          </p>

          <h1 className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', letterSpacing: '-0.02em' }}>
            Gajji Srinath
          </h1>

          <h2 className="text-muted font-semibold mb-6 min-h-[2.5rem]"
            style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)' }}>
            {typedText}
            <span className="cursor-blink ml-0.5">|</span>
          </h2>

          <p className="text-muted text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            Highly organized and detail-oriented professional with a strong academic background
            and practical experience in data analysis, research, and project coordination. Adept at
            using Power BI, Python, GIS tools, and web frameworks to build scalable solutions.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                         bg-blue-500 text-white shadow-lg shadow-blue-500/30
                         hover:bg-blue-400 hover:shadow-blue-400/40 hover:-translate-y-0.5
                         transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/60">
              Check out my work!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="mailto:srinathguna12@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                         border border-blue-500/40 text-accent
                         hover:border-blue-400 hover:bg-blue-500/10 hover:-translate-y-0.5
                         transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/60">
              Get in touch
            </a>
          </div>
        </div>

        {/* Visual card */}
        <div className="hidden lg:flex justify-center items-center fade-in delay-200">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-2xl opacity-20 animate-pulse"
              style={{ background: 'conic-gradient(from 180deg at 50% 50%, #3b82f6, #0ea5e9, #3b82f6)', filter: 'blur(40px)' }} />
            <div className="card-surface relative w-full h-full rounded-2xl border flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-gradient mb-2">GS</div>
                <div className="text-mono-accent text-xs tracking-widest uppercase opacity-60">Portfolio</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-accent font-mono text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue-400 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
