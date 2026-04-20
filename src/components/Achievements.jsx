import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'Best All-Rounder',
      date: 'January 2024',
      description: 'Honoured with the \'Baroda Achievers Award\' by Bank of Baroda for excelling in all-round categories in the institution.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="achievement-icon">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      )
    },
    {
      title: '1st Place - 3D Archidex',
      date: 'March 2023',
      description: 'Winner of the AutoCAD Designing and 3D Modelling Competition organized by IIT Mandi.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="achievement-icon">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
          <path d="M4 22h16"></path>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
        </svg>
      )
    },
    {
      title: 'Football Player',
      date: '2018 & 2023',
      description: 'Represented MANIT Bhopal at the Inter-NIT Football Tournament (2023). Represented Warangal Cluster (Telangana State) at the Regional Level Football Tournament (2018).',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="achievement-icon">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 12l3.5-2M12 12l-3.5-2M12 12v4M8.5 10l-2.5 4M15.5 10l2.5 4M12 16l-3.5 3.5M12 16l3.5 3.5M8.5 10v-4M15.5 10v-4"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="heading-lg section-title animate-fade-in">Achievements & Awards</h2>
        
        <div className="achievements-list">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className={`achievement-card glass-panel hover-glow animate-fade-in delay-${(index + 1) * 100}`}
            >
              <div className="achievement-icon-wrapper">
                {item.icon}
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-date text-muted">{item.date}</p>
                <p className="achievement-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
