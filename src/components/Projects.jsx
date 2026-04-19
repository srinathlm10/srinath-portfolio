import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'EV Feeder Service System for Hyderabad',
      date: 'May 2024',
      description: 'Designing a Last-mile Feeder Service System of E-Vehicles for Hyderabad\'s Metro & MMTS. Conducted accessibility analysis using GIS and analyzed costs, revenue potential, regulations, and policies.',
      tags: ['GIS', 'Data Collection', 'Planning', 'Research'],
      github: '#',
      live: '#'
    },
    {
      title: 'Road Safety Data Analysis',
      date: 'April 2024',
      description: 'Conducted a comprehensive analysis of road safety data using Power BI to uncover patterns, identify high-risk areas, and propose data-driven interventions for improved safety.',
      tags: ['Power BI', 'Data Visualization', 'Analysis'],
      github: '#',
      live: '#'
    },
    {
      title: 'Reimagining Higher Education in India',
      date: 'March 2024',
      description: 'Developed a comprehensive policy roadmap towards a "Viksit Bharat" as part of a national policy-making competition, focusing on sustainable and inclusive educational reforms.',
      tags: ['Policy Making', 'Research', 'Planning'],
      github: '#',
      live: '#'
    },
    {
      title: 'Regional Planning for Betul District',
      date: 'November 2023',
      description: 'Formulated a comprehensive district plan promoting inclusive and sustainable development through cooperatives across agriculture, forestry, handicrafts, and tourism. Focused on capacity building and market linkages.',
      tags: ['Urban Planning', 'Policy Making', 'Research'],
      github: '#',
      live: '#'
    },
    {
      title: 'Video Game Industry Analysis',
      date: 'June 2023',
      description: 'Processed a comprehensive dataset for the video game industry. Performed data exploration, statistical analysis, and created interactive visualizations to extract meaningful business insights.',
      tags: ['Python', 'Pandas', 'Power BI', 'Excel'],
      github: '#',
      live: '#'
    },
    {
      title: 'Iqbal Maidan Area - Urban Design',
      date: 'April 2023',
      description: 'Analyzed urban design aspects of the neighborhood. Proposed revitalization focusing on enhancing public space and pedestrian accessibility. Generated 3D Models using Sketchup.',
      tags: ['Urban Design', 'SketchUp', '3D Modeling'],
      github: '#',
      live: '#'
    },
    {
      title: 'Land Suitability Analysis for Housing',
      date: 'April 2023',
      description: 'Used Geographic Information System (GIS) and Multi-Criteria Decision Analysis (MCDA) to evaluate the various factors that influence the suitability of land for housing development in Orchha.',
      tags: ['ArcGIS', 'QGIS', 'Spatial Analysis'],
      github: '#',
      live: '#'
    },
    {
      title: 'Mobility Plan for MANIT Campus',
      date: 'March 2022',
      description: 'Analyzed campus transportation patterns using surveys and origin-destination matrix analysis. Proposed plan for improved accessibility, safety, and active transportation through infrastructure management.',
      tags: ['Transportation Planning', 'Data Analysis'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="heading-lg section-title animate-fade-in">Academic & Personal Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card glass-panel animate-fade-in delay-${(index % 3 + 1) * 100}`}
            >
              <div className="project-header">
                <div className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
              
              <h3 className="project-title">
                {project.title}
              </h3>
              
              <div className="project-date" style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                {project.date}
              </div>
              
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              
              <ul className="project-tech-list">
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
