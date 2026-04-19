import './Research.css';

const Research = () => {
  const publications = [
    {
      title: 'Ujjain: A City in Transformation - Past & Future Trends & Challenges of Development in Sync',
      date: 'May 2024',
      publisher: 'MANIT Bhopal',
      description: 'Research Paper presented at International Conference and Knowledge Series on Inclusive, Resilient and Sustainable Human Settlement. Analysed the impact of urbanization on heritage in Ujjain. Researched interplay between economic development and historic preservation. Identified challenges and opportunities for Ujjain\'s future as a cultural center.',
      link: '#'
    }
  ];

  return (
    <section id="research" className="section">
      <div className="container">
        <h2 className="heading-lg section-title animate-fade-in">Research & Publications</h2>
        
        <div className="research-list">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className={`research-card glass-panel animate-fade-in delay-${(index + 1) * 100}`}
            >
              <div className="research-header">
                <div className="research-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div className="research-date text-muted" style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                  {pub.date}
                </div>
              </div>
              
              <h3 className="research-title">
                {pub.title}
              </h3>
              
              <div className="research-publisher" style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '500' }}>
                {pub.publisher}
              </div>
              
              <div className="research-description">
                <p>{pub.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
