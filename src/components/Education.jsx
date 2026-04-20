import './Education.css';

const Education = () => {
  const education = [
    {
      institution: 'Maulana Azad National Institute of Technology, Bhopal',
      degree: 'Bachelor of Planning',
      year: '2024',
      score: 'CGPA: 8.13',
      logo: '/images/Manit Logo color_0.jpg'
    },
    {
      institution: 'Jawahar Navodaya Vidyalaya, Sirpur Kaghaznagar',
      degree: 'PCM (Higher Secondary), CBSE',
      year: '2020',
      score: 'Percentage: 93.6%',
      logo: '/images/fa09d2a4026dcd394d09826bc07d4b3e.jpg'
    },
    {
      institution: 'Jawahar Navodaya Vidyalaya, Sirpur Kaghaznagar',
      degree: 'High School, CBSE',
      year: '2018',
      score: 'Percentage: 88%',
      logo: '/images/fa09d2a4026dcd394d09826bc07d4b3e.jpg'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="heading-lg section-title animate-fade-in">Education</h2>
        
        <div className="education-list">
          {education.map((item, index) => (
            <div 
              key={index} 
              className={`edu-card glass-panel hover-glow animate-fade-in delay-${(index + 1) * 100}`}
            >
              <div className="edu-icon-wrapper">
                {item.logo ? (
                  <img src={item.logo} alt={`${item.institution} logo`} className="edu-logo-img" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="edu-icon">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                )}
              </div>
              <div className="edu-content">
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-institution">{item.institution}</p>
                {item.score && <p className="edu-score">{item.score}</p>}
              </div>
              <div className="edu-year text-muted">{item.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
