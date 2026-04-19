import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting text-gradient">Hi, my name is</p>
          <h1 className="heading-xl hero-title">Gajji Srinath</h1>
          <h2 className="heading-lg hero-subtitle text-muted">Data Analyst & Urban Planner.</h2>
          <p className="hero-description text-muted">
            Highly organized and detail-oriented professional with a strong academic background 
            and practical experience in data analysis, research, and project coordination. Adept at 
            using Power BI, Python, GIS tools, and web frameworks to build scalable solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Check out my work!</a>
            <a href="mailto:srinathguna12@gmail.com" className="btn btn-outline">Get in touch</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in delay-200">
          <div className="abstract-shape glass-panel"></div>
          <div className="abstract-shape-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
