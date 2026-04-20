import { useScrollReveal } from '../hooks/useScrollReveal';
import { use3DTilt } from '../hooks/use3DTilt';

const CertCard = ({ cert }) => {
  const tiltRef = use3DTilt();
  return (
    <div ref={tiltRef}
      className="card-surface-sm card-interactive flex items-start gap-4 p-5 rounded-xl border">
      <div className="icon-tile flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-sm leading-snug mb-1">{cert.title}</h4>
        <p className="text-muted text-xs mb-1">{cert.issuer}</p>
        <span className="text-mono-accent text-xs">{cert.date}</span>
      </div>
    </div>
  );
};

const Certifications = () => {
  const revealRef = useScrollReveal();

  const categories = [
    {
      label: 'Finance',
      items: [
        { title: 'Reading Financial Statements', issuer: 'CFI', date: 'June 2024' },
        { title: 'Macabacus Quick Start Guide', issuer: 'CFI', date: 'June 2024' },
        { title: 'Excel Fundamentals - Formulas for Finance', issuer: 'CFI', date: 'May 2024' },
      ],
    },
    {
      label: 'Data Science & Analytics',
      items: [
        { title: 'Applied Data Science Specialization', issuer: 'Coursera (IBM)', date: 'June 2023' },
        { title: 'IBM Data Science Specialization', issuer: 'Coursera (IBM)', date: 'May 2023' },
      ],
    },
    {
      label: 'Urban Planning & GIS',
      items: [
        { title: 'Smart Cities – Management of Smart Urban Infrastructures', issuer: 'Coursera', date: 'June 2023' },
        { title: 'Practical GIS in QGIS - Spatial Analysis', issuer: 'Udemy', date: 'Oct 2022' },
      ],
    },
    {
      label: 'Leadership & Extracurricular',
      items: [
        { title: "NCC 'C' & 'B' Certificate Holder", issuer: 'Ministry of Defense (GoI)', date: 'May 2023 / May 2022' },
      ],
    },
  ];

  return (
    <section id="certifications" className="reveal py-24 md:py-32" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading">Certifications</h2>
        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <div key={ci} className={`fade-in delay-${(ci + 1) * 100}`}>
              <h3 className="text-gradient font-bold text-lg mb-5 pb-2 border-b theme-border inline-block">
                {cat.label}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((cert, i) => <CertCard key={i} cert={cert} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
