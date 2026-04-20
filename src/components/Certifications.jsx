import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Reading Financial Statements',
      issuer: 'CFI',
      date: 'June 2024'
    },
    {
      title: 'Macabacus Quick Start Guide',
      issuer: 'CFI',
      date: 'June 2024'
    },
    {
      title: 'Excel Fundamentals - Formulas for Finance',
      issuer: 'CFI',
      date: 'May 2024'
    },
    {
      title: 'Applied Data Science Specialization',
      issuer: 'Coursera (IBM)',
      date: 'June 2023'
    },
    {
      title: 'IBM Data Science Specialization',
      issuer: 'Coursera (IBM)',
      date: 'May 2023'
    },
    {
      title: 'Smart Cities – Management of Smart Urban Infrastructures',
      issuer: 'Coursera',
      date: 'June 2023'
    },
    {
      title: 'NCC \'C\' & \'B\' Certificate Holder',
      issuer: 'Ministry of Defense (GoI)',
      date: 'May 2023 / May 2022'
    },
    {
      title: 'Practical GIS in QGIS - Spatial Analysis',
      issuer: 'Udemy',
      date: 'Oct 2022'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="heading-lg section-title animate-fade-in">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`cert-card glass-panel hover-glow animate-fade-in delay-${(index % 4 + 1) * 100}`}
            >
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer text-muted">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
