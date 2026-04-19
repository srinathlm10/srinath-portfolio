import './About.css';

const About = () => {
  const skills = [
    'Financial Modeling',
    'Data Analysis & Visualization',
    'Power BI & Tableau',
    'Advanced Excel (Macabacus)',
    'Python (Pandas, Numpy)',
    'MySQL',
    'Market & Investment Research',
    'Operations Management',
    'HTML, CSS, JavaScript',
    'Spatial Analysis (GIS)'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="heading-lg section-title animate-fade-in">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass-panel animate-fade-in delay-100">
            <p>
              Hello! I'm G. Srinath, a data-driven professional with a strong foundation in analytics and strategic planning. 
              With a background from the Maulana Azad National Institute of Technology (MANIT), Bhopal, I specialize in 
              turning complex datasets into actionable business and financial insights.
            </p>
            <p>
              I have practical experience leveraging tools like Power BI, Python, and advanced Excel for rigorous 
              data analysis and financial modeling. Whether it's processing large datasets to uncover market trends or 
              creating dynamic financial visualizations, I love diving deep into information to drive strategic decision-making.
            </p>
            <p>
              Driven by a deep enthusiasm for finance and management, my goal is to forge a career path 
              that bridges my analytical expertise with corporate finance and business operations. I am passionate about 
              applying my problem-solving skills to financial modeling, investment research, and operations 
              management to deliver impactful, data-informed results.
            </p>
            <p>Here are a few technologies and skills I've been working with recently:</p>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="about-image-wrapper animate-fade-in delay-200">
            <div className="about-image glass-panel">
              <div className="image-placeholder">
                {/* Fallback avatar icon, you can replace this with an actual <img> tag later */}
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
