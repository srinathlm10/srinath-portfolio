import { useScrollReveal } from '../hooks/useScrollReveal';
import { use3DTilt } from '../hooks/use3DTilt';

const ResearchCard = ({ pub, index }) => {
  const tiltRef = use3DTilt();
  return (
    <div ref={tiltRef}
      className={`card-surface card-interactive p-6 sm:p-8 rounded-2xl border fade-in delay-${(index + 1) * 100}`}>

      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
        <div className="icon-tile flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        </div>
        <div>
          <span className="tag-pill text-[10px] sm:text-xs mb-1 inline-block">Conference Paper</span>
          <div className="text-mono-accent text-[10px] sm:text-xs mt-1">{pub.date}</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-base sm:text-lg leading-snug mb-3 sm:mb-4">{pub.title}</h3>

      {/* Description */}
      <p className="text-muted text-xs sm:text-sm leading-relaxed mb-5">{pub.description}</p>

      {/* Conference meta details */}
      <div className="rounded-xl p-3 sm:p-4 mb-5 space-y-2"
        style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.12)' }}>
        {pub.meta.map(({ label, value }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:gap-x-2 text-[10px] sm:text-xs">
            <span className="text-accent font-semibold min-w-[80px]">{label}</span>
            <span className="text-muted">{value}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href={pub.link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent
                   hover:opacity-70 transition-opacity duration-200 group"
      >
        View on ResearchGate
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
};

const Research = () => {
  const revealRef = useScrollReveal();

  const publications = [
    {
      title: 'Ujjain: A City in Transformation — Past & Future Trends & Challenges of Development in Sync',
      date: 'May 02–04, 2024',
      description: 'Analysed the impact of urbanization on heritage in Ujjain and researched the interplay between economic development and historic preservation. Proposed strategies for Ujjain\'s future as a sustainable cultural centre.',
      meta: [
        { label: 'Conference',  value: 'International Conference and Knowledge Series on Inclusive, Resilient and Sustainable Human Settlement' },
        { label: 'Organiser',   value: 'Poornima University — Faculty of Planning & Architecture, Jaipur' },
        { label: 'Collab.',     value: 'Council of Architecture, Training & Research Centre, Bhopal' },
        { label: 'Sponsored by',value: 'Jaipur Smart City Limited' },
        { label: 'ISBN',        value: '978-81-972088-5-0' },
      ],
      link: 'https://www.researchgate.net/publication/401335715_Ujjain_A_City_in_Transformation_-_Past_and_Future_trends_and_challenges_of_development_in_sync',
    },
  ];

  return (
    <section id="research" className="reveal py-24 md:py-32" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading">Conference Papers & Publications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, i) => <ResearchCard key={i} pub={pub} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Research;
