import { useScrollReveal } from '../hooks/useScrollReveal';
import { use3DTilt } from '../hooks/use3DTilt';

const ExperienceCard = ({ job, index }) => {
  const tiltRef = use3DTilt({ max: 5, scale: 1.01 });
  return (
    <div className="relative flex gap-4 sm:gap-8">
      {/* Timeline spine & dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-blue-400 bg-blue-400/20 z-10 mt-1.5 flex-shrink-0" />
        {/* Vertical line — hidden on last item */}
        {index < 2 && (
          <div className="w-px flex-1 mt-2" style={{ background: 'rgba(59,130,246,0.25)' }} />
        )}
      </div>

      {/* Card */}
      <div ref={tiltRef}
        className={`card-surface card-interactive flex-1 p-5 sm:p-6 rounded-2xl border mb-8 fade-in delay-${(index + 1) * 100}`}>

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2 sm:mb-1">
          <h3 className="font-bold text-base sm:text-lg leading-tight">{job.role}</h3>
          <span className="tag-pill text-[10px] sm:text-xs flex-shrink-0 self-start sm:self-auto">{job.range}</span>
        </div>

        {/* Company */}
        <p className="text-accent font-semibold text-xs sm:text-sm mb-4">{job.company}</p>

        {/* Duties */}
        <ul className="space-y-2">
          {job.duties.map((duty, i) => (
            <li key={i} className="text-muted flex gap-3 text-xs sm:text-sm leading-relaxed">
              <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
              {duty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const revealRef = useScrollReveal();

  const jobs = [
    {
      company: 'City Future Lab, IIT Kharagpur',
      role: 'Urban Planner — Intern',
      range: 'May 2023 – Jul 2023',
      duties: [
        'Developed interactive user interfaces using HTML, CSS, JavaScript and Flask framework for a Bus Control and Dispatch System.',
        'Developed an efficient solution to the Vehicle Routing Problem in Bicycle Redistribution using Python.',
      ],
    },
    {
      company: 'Zorway Technologies LLP',
      role: 'Marketing Officer — Intern',
      range: 'Jun 2023 – Aug 2023',
      duties: [
        'Supported marketing team in developing and executing multi-channel campaigns (social media, content creation).',
        'Analyzed performance and presented insights for continuous improvement.',
        'Conducted market research and competitor analysis. Managed and grew social media presence.',
      ],
    },
    {
      company: 'Corizo',
      role: 'Data Science — Training Intern',
      range: 'Nov 2022 – Dec 2022',
      duties: [
        'Completed comprehensive training in Data Science and Machine Learning methodologies.',
        'Applied theoretical knowledge to practical, hands-on tasks involving data analysis.',
      ],
    },
  ];

  return (
    <section id="experience" className="reveal py-24 md:py-32" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading">Where I've Worked</h2>

        <div className="max-w-3xl">
          {jobs.map((job, index) => (
            <ExperienceCard key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
