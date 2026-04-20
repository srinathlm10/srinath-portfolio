import { useScrollReveal } from '../hooks/useScrollReveal';
import { use3DTilt } from '../hooks/use3DTilt';

const ProjectCard = ({ project, index }) => {
  const tiltRef = use3DTilt();
  const delayClass = ['delay-100', 'delay-200', 'delay-300'][index % 3];

  return (
    <div ref={tiltRef}
      className={`card-surface card-interactive flex flex-col p-6 rounded-2xl border fade-in ${delayClass}`}>
      <div className="mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1" className="w-10 h-10">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      <h3 className="font-bold text-base leading-snug mb-2">{project.title}</h3>
      <p className="text-accent font-mono text-xs mb-3">{project.date}</p>
      <p className="text-muted text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const revealRef = useScrollReveal();

  const projects = [
    { title: 'EV Feeder Service System for Hyderabad', date: 'May 2024', description: "Designing a Last-mile Feeder Service System of E-Vehicles for Hyderabad's Metro & MMTS. Conducted accessibility analysis using GIS and analyzed costs, revenue potential, regulations, and policies.", tags: ['GIS', 'Data Collection', 'Planning', 'Research'] },
    { title: 'Road Safety Data Analysis', date: 'April 2024', description: 'Conducted a comprehensive analysis of road safety data using Power BI to uncover patterns, identify high-risk areas, and propose data-driven interventions for improved safety.', tags: ['Power BI', 'Data Visualization', 'Analysis'] },
    { title: 'Reimagining Higher Education in India', date: 'March 2024', description: 'Developed a comprehensive policy roadmap towards a "Viksit Bharat" as part of a national policy-making competition, focusing on sustainable and inclusive educational reforms.', tags: ['Policy Making', 'Research', 'Planning'] },
    { title: 'Regional Planning for Betul District', date: 'November 2023', description: 'Formulated a comprehensive district plan promoting inclusive and sustainable development through cooperatives across agriculture, forestry, handicrafts, and tourism.', tags: ['Urban Planning', 'Policy Making', 'Research'] },
    { title: 'Video Game Industry Analysis', date: 'June 2023', description: 'Processed a comprehensive dataset for the video game industry. Performed data exploration, statistical analysis, and created interactive visualizations to extract meaningful business insights.', tags: ['Python', 'Pandas', 'Power BI', 'Excel'] },
    { title: 'Iqbal Maidan Area - Urban Design', date: 'April 2023', description: 'Analyzed urban design aspects of the neighborhood. Proposed revitalization focusing on enhancing public space and pedestrian accessibility. Generated 3D Models using Sketchup.', tags: ['Urban Design', 'SketchUp', '3D Modeling'] },
    { title: 'Land Suitability Analysis for Housing', date: 'April 2023', description: 'Used GIS and Multi-Criteria Decision Analysis (MCDA) to evaluate the various factors that influence the suitability of land for housing development in Orchha.', tags: ['ArcGIS', 'QGIS', 'Spatial Analysis'] },
    { title: 'Mobility Plan for MANIT Campus', date: 'March 2022', description: 'Analyzed campus transportation patterns using surveys and origin-destination matrix analysis. Proposed plan for improved accessibility, safety, and active transportation.', tags: ['Transportation Planning', 'Data Analysis'] },
  ];

  return (
    <section id="projects" className="reveal py-24 md:py-32" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading">Academic & Personal Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
