import { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: 'City Future Lab, IIT Kharagpur',
      role: 'Urban Planner - Intern',
      range: 'May 2023 - July 2023',
      duties: [
        'Developed interactive user interfaces for the web application using HTML, CSS, JavaScript and Flask framework for a Bus Control and Dispatch System.',
        'Developed an efficient solution to the Vehicle Routing Problem in Bicycle Redistribution using Python.'
      ]
    },
    {
      company: 'Zorway Technologies LLP',
      role: 'Marketing Officer - Intern',
      range: 'June 2023 - Aug 2023',
      duties: [
        'Supported marketing team in developing and executing multi-channel campaigns (social media, content creation).',
        'Analyzed performance and presented insights for continuous improvement.',
        'Conducted market research and competitor analysis. Managed and grew social media presence.'
      ]
    },
    {
      company: 'Corizo',
      role: 'Data Science - Training Intern',
      range: 'Nov 2022 - Dec 2022',
      duties: [
        'Completed comprehensive training in Data Science and Machine Learning methodologies.',
        'Applied theoretical knowledge to practical, hands-on tasks involving data analysis.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="heading-lg section-title animate-fade-in">Where I've Worked</h2>
        
        <div className="experience-container glass-panel animate-fade-in delay-100">
          <div className="tab-list" role="tablist">
            {jobs.map((job, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                role="tab"
                aria-selected={activeTab === index}
              >
                {job.company.split(',')[0]}
              </button>
            ))}
          </div>
          
          <div className="tab-panels">
            {jobs.map((job, index) => (
              <div 
                key={index}
                className={`tab-panel ${activeTab === index ? 'active' : ''}`}
                role="tabpanel"
                hidden={activeTab !== index}
              >
                <h3 className="job-role">
                  {job.role} <span className="job-company">@ {job.company}</span>
                </h3>
                <p className="job-range text-muted">{job.range}</p>
                <ul className="job-duties">
                  {job.duties.map((duty, i) => (
                    <li key={i} className="job-duty">{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
