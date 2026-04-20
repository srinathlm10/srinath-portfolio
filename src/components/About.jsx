import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const revealRef = useScrollReveal();

  const skills = [
    'Financial Modeling', 'Data Analysis & Visualization', 'Power BI & Tableau',
    'Advanced Excel (Macabacus)', 'Python (Pandas, Numpy)', 'MySQL',
    'Market & Investment Research', 'Operations Management', 'HTML, CSS, JavaScript',
    'Spatial Analysis (GIS)',
  ];

  return (
    <section id="about" className="reveal py-24 md:py-32" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="section-heading">About Me</h2>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Text */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="card-surface card-interactive p-6 md:p-8 rounded-2xl border transition-all duration-300">
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
                Hello! I'm <strong className="font-semibold" style={{ color: 'inherit' }}>G. Srinath</strong>, a data-driven professional
                with a strong foundation in analytics and strategic planning. With a background from
                <span className="text-accent font-medium"> MANIT, Bhopal</span>, I specialize in turning complex datasets
                into actionable business and financial insights.
              </p>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
                I have practical experience leveraging tools like Power BI, Python, and advanced Excel for rigorous
                data analysis and financial modeling — from processing large datasets to creating dynamic financial
                visualizations that drive strategic decision-making.
              </p>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                My goal is to forge a career path that bridges analytical expertise with corporate finance and
                business operations, delivering impactful, data-informed results.
              </p>

              <p className="text-accent font-mono text-sm mb-4 tracking-wide">// Technologies & Skills</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-muted flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-accent font-mono text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Avatar */}
          <div className="lg:col-span-2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full opacity-30 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)' }} />
              <div className="card-surface relative w-full h-full rounded-full border-2 theme-border flex items-center justify-center
                              transition-all duration-300 hover:scale-105 overflow-hidden shadow-2xl">
                <img 
                  src="/images/srinath_profile.png" 
                  alt="Gajji Srinath" 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ 
                    objectPosition: '50% 15%',
                    transform: 'scale(1.05)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
