import './Responsibility.css';

const Responsibility = () => {
  const roles = [
    {
      title: 'Under Officer at NCC',
      organization: '1 MP CTR NCC',
      date: 'Dec 2021 - Feb 2023',
      description: 'Held responsibilities for organizing and assisting with special events, programs, and training activities. Volunteered with organizations to make measurable differences.'
    },
    {
      title: 'Sergeant',
      organization: 'National Cadet Corps (NCC)',
      date: '2020 - 2021',
      description: 'Mentored junior cadets, assisted in organizing drill practices and camps, and ensured discipline and smooth execution of training programs.'
    }
  ];

  return (
    <section id="responsibility" className="section">
      <div className="container">
        <h2 className="heading-lg section-title animate-fade-in">Positions of Responsibility</h2>
        
        <div className="timeline-container">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className={`timeline-item animate-fade-in delay-${(index + 1) * 100}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="resp-header">
                  <h3 className="resp-title">{role.title}</h3>
                  <div className="resp-date text-muted">{role.date}</div>
                </div>
                <div className="resp-org">{role.organization}</div>
                <p className="resp-description">{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibility;
